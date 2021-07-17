import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;

    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { error, addDoc };
};

export default useCollection;
