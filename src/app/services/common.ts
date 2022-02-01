import firebase from "firebase/compat"

export function convertSnaps<T>(results: any){
    return <T[]> results.docs.map((snap: any) =>{
      return {
        id: snap.id,
        ...<any>snap.data()
      }
    })
  }