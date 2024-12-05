import React from "react"
import { useState } from "react"

export default function Shoppping() {  
    // Birden fazla state kullanımı  
    const [products, setProducts] = useState([  
      { id: 1, name: "Laptop", price: 1000, quantity: 0 },  
      { id: 2, name: "Telefon", price: 800, quantity: 0 },  
      { id: 3, name: "Kulaklık", price: 100, quantity: 0 },  
    ])  
    
    // Obje olarak state kullanımı  
    const [user, setUser] = useState({  
      name: "",  
      email: "",  
      isLoggedIn: false  
    })  
  
    // Toplam fiyat hesaplama  
    const totalPrice = products.reduce((total, product) => {  
      return total + (product.price * product.quantity)  
    }, 0)  
  
    // Ürün miktarını güncelleme  
    const updateQuantity = (productId, newQuantity) => {  
      // Array state'ini güncelleme - immutability önemli!  
      setProducts(products.map(product =>   
        product.id === productId   
          ? { ...product, quantity: Math.max(0, newQuantity) }  
          : product  
      ))  
    }  
  
    // Kullanıcı bilgilerini güncelleme  
    const updateUser = (field, value) => {  
      // Obje state'ini güncelleme - spread operator kullanımı  
      setUser({  
        ...user,  
        [field]: value  
      })  
    }  
  
    // Sepeti sıfırlama  
    const resetCart = () => {  
      setProducts(products.map(product => ({  
        ...product,  
        quantity: 0  
      })))  
    }  
  
    return (  
      <div className="p-6 max-w-2xl mx-auto">  
        {/* Kullanıcı bilgileri formu */}  
        <div className="mb-6 p-4 bg-gray-100 rounded">  
          <h2 className="text-xl font-bold mb-4">Kullanıcı Bilgileri</h2>  
          <div className="space-y-2">  
            <input  
              type="text"  
              placeholder="İsim"  
              value={user.name}  
              onChange={(e) => updateUser('name', e.target.value)}  
              className="w-full p-2 border rounded"  
            />  
            <input  
              type="email"  
              placeholder="Email"  
              value={user.email}  
              onChange={(e) => updateUser('email', e.target.value)}  
              className="w-full p-2 border rounded"  
            />  
            <button  
              onClick={() => updateUser('isLoggedIn', !user.isLoggedIn)}  
              className={`w-full p-2 rounded ${  
                user.isLoggedIn   
                  ? 'bg-red-500 hover:bg-red-600'   
                  : 'bg-green-500 hover:bg-green-600'  
              } text-white`}  
            >  
              {user.isLoggedIn ? 'Çıkış Yap' : 'Giriş Yap'}  
            </button>  
          </div>  
        </div>  
  
        {/* Ürün listesi */}  
        <div className="space-y-4">  
          {products.map(product => (  
            <div key={product.id} className="flex items-center justify-between p-4 border rounded">  
              <div>  
                <h3 className="font-bold">{product.name}</h3>  
                <p className="text-gray-600">{product.price}₺</p>  
              </div>  
              <div className="flex items-center gap-2">  
                <button  
                  onClick={() => updateQuantity(product.id, product.quantity - 1)}  
                  className="px-3 py-1 bg-red-500 text-white rounded"  
                >  
                  -  
                </button>  
                <span className="w-8 text-center">{product.quantity}</span>  
                <button  
                  onClick={() => updateQuantity(product.id, product.quantity + 1)}  
                  className="px-3 py-1 bg-green-500 text-white rounded"  
                >  
                  +  
                </button>  
              </div>  
            </div>  
          ))}  
        </div>  
  
        {/* Toplam ve Reset */}  
        <div className="mt-6 p-4 bg-gray-100 rounded flex justify-between items-center">  
          <div className="text-xl font-bold">  
            Toplam: {totalPrice}₺  
          </div>  
          <button  
            onClick={resetCart}  
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"  
          >  
            Sepeti Sıfırla  
          </button>  
        </div>  
      </div>  
    )  
  }  