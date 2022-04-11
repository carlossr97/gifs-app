import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private api : string ='k0ufxPEI334BB3FpkvnvAGi3C9a8SjfZ' 
  private url : string ='https://api.giphy.com/v1/gifs'
  private _historial : string[]=[];
  public resultados:any[]=[];
  
  get historial(){
    return [...this._historial];
  }

  constructor(
    private httpClient:HttpClient
  ){
    this._historial=JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados=JSON.parse(localStorage.getItem('gifs')!) || [];
    }

  buscarGifs(query : string){
    query=query.trim().toLocaleLowerCase()
    
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10)

      localStorage.setItem('historial',JSON.stringify(this._historial))
      

    }
    const params = new HttpParams()
      .set('api_key',this.api)
      .set('limit','50')
      .set('q',query)

    this.httpClient.get(`${this.url}/search`,{params:params})
    .subscribe((resp:any) => {
      
      this.resultados = resp.data;
      console.log(this.resultados);
      localStorage.setItem('gifs',JSON.stringify(this.resultados));
    })
  }


  


}
