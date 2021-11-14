import axios from 'axios'
import {PostsType}  from '../types/interface'


const API_URL = 'https://jsonplaceholder.typicode.com'

export const  request = async (methods:any, url: string, data?:any):Promise<PostsType[]> => {
        const response = await axios({method: methods, url:`${API_URL}/${url}` , data:data});
        return  response.data
}


