import axios from 'axios';
 
export default() =>{
    return axios.create({
        baseURL:'http://localahost:8081'
    })
}