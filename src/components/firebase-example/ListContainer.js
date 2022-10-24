import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const ListContainer = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    getItemsPricierThan(1600)
  }, [])

   const getItem = () => { 
        const db = getFirestore()
        const docRef = doc(db, 'items', 'Se5oJj9je87PjIh1g15T')
        getDoc(docRef).then( res=>{
            console.log( {id: res.id,...res.data()});
        })

   }

    const getItems = () => { 
        const db = getFirestore()
        const itemsRef = collection(db, 'items')
        getDocs(itemsRef).then( res => {
            console.log(res);
            const data = res.docs.map(e => ({id: e.id, ...e.data()}))
 //             console.log(data);
                setItems(data)
            });
    }

    const getItemsPricierThan = (price) =>{
        const db = getFirestore()
        const itemsRef = collection(db, 'items')
 //       console.log("Esto es ref ", itemsRef)
        const q =  query(itemsRef, where('price', '>', price))
        getDocs(q).then( res => {
            console.log(res);
            const data = res.docs.map(e => ({id: e.id, ...e.data()}))
                console.table(data);
                setItems(data)
        });
    }
  
  return (
    <div>{ items.map( item => <li key={item.id}>{item.name}<img src={item.img} alt="Room" /></li>)}</div>
  )
}
export default ListContainer