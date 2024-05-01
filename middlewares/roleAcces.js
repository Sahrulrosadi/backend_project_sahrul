
const path =['/quiz','/answer','/user','/room']


const roleAcces = (userRole, endpoint, method, userId, url) => {

    console.log(endpoint)
    console.log(userRole)
    console.log(url)
    console.log(method)
    console.log(userId)
    if (path.includes(endpoint) && userRole === 'superadmin'){

            return true 
        }

    if(method === 'GET' && userRole === 'admin'){
            return true
        }

    if(userRole === 'user'){
        if(endpoint === '/user' && url === `/${userId}`){
            if (method === 'GET'){
                return true
            }
        }

    } 
    else {
        return false
    }

    

}
export default roleAcces