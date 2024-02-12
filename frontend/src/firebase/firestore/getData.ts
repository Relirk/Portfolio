import firebase_app from "../config";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const db = getFirestore(firebase_app);

export async function getAllDocuments(collectionName: string) {
  let result: any = [];
  let error: any = {};
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
      result.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}

// export default async function getDoument(collection: string, id: string) {
//   const docRef = doc(db, collection, id);
//   let result = null;
//   let error = null;

//   try {
//     result = await getDoc(docRef);
//   } catch (e) {
//     error = e;
//   }

//   return { result, error };
// }
