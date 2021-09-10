import React, { useState } from "react";
import formData from "../../data/formData.json";
import InputField from "../customComponent/InputField.jsx";

export default function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <form>
      <InputField hook={[name, setName]} HTMLParameter={formData.name}>
        Full name
      </InputField>
      <InputField hook={[email, setEmail]} HTMLParameter={formData.email}>
        Email
      </InputField>
      <InputField hook={[date, setDate]} HTMLParameter={formData.date}>
        Date
      </InputField>
      <InputField hook={[time, setTime]} HTMLParameter={formData.time}>
        Time
      </InputField>
      <button className="button-main">Submit</button>
    </form>
  );
}
