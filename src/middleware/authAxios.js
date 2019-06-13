import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://easylist-firebase-database.firebaseio.com/'
})

instance.defaults.headers.common['SOMETHING'] = 'BLABLA'

export default instance