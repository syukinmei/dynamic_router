import axios from 'axios';

// export const getAnotherRoutes = async () => {
//     let date;
//     await axios.get("http://127.0.0.1:5001/anotherRoutes").then(
//         (response) => {
//             console.log("请求成功", response.data);
//             date = response.data;
//         },
//         (error) => {
//             console.log("请求失败", error.message);
//         }
//     );
//     console.log(date, 1)
//     return 1
// }

export function getAnotherRoutes() {
    return axios({
        method: 'get',
        url: 'http://127.0.0.1:5001/anotherRoutes'
    })
}