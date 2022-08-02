import { useForm } from "react-hook-form";
import Header from "./Header";
import axios from "axios";

export default function SignUpToServices() {
  const { register, handleSubmit } = useForm();

  const addService = async (user,event) => {
    event.preventDefault();
    try {
      return await axios.post(
        "https://meetings-test.herokuapp.com/meeting",
        user
       
      );
    } catch (error) {
      console.log("error in add user");
    }
  };

  return (
    <form onSubmit={handleSubmit(addService)}>
      <Header />
      <input {...register("business_id")} placeholder="business id" />
      <input type="time" placeholder="data" {...register("data", {})} />
      <input {...register("duration")} placeholder="Time" />
      <input {...register("meeting")} placeholder="meeting" />
      <input type="submit" />
    </form>
  );
}