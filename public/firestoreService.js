import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const fetchItems = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "items"));
    const items = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export const fetchFavorites = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "favorites"));
    const items = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};


export const createOrder = async(cartItems, totalPrice) => {
  try {
    const ordersCollectionRef  = collection(db, 'orders');
    const obj = {
      items: cartItems,
      totalPrice,
    };
    const docRef = await addDoc(ordersCollectionRef , obj);
    return docRef;
  } catch (error) {
    console.log('Failed to create the order', error);
  }
}
