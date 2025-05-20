const user = localStorage.getItem('user')
const token = localStorage.getItem('token')

if(!user && !token){
    window.location.href='Login.html'
}

function logout(){
    localStorage.clear()
    window.location.reload(true)
}
