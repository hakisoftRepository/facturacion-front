import Vue from 'vue'
import io from 'socket.io-client'

const socket = io('https://api-demofacturacion.hakisoft.com/')

Vue.prototype.$socket = socket