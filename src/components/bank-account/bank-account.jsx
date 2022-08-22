import React from "react";
import Form from "../common/form";
import { toast } from "react-toastify";
import { object, string } from "yup";
import "./bank-account.scss";

class BankAccount extends Form {
  state = {
    data: {
      beneficiary: "ars@domain.com",
      iban: "",
      swift: "",
      bankCurrency: "",
    },
    errors: {},
  };

  schema = object({
    beneficiary: string().min(2).required().label("Brand Name"),
    iban: string().min(2).required().label("Website (URL)"),
    swift: string().min(2).required().label("SWIFT"),
    bankCurrency: string().min(6).required().label("Bank Currency"),
  });

  doSubmit = () => {
    console.log("data = ", this.state.data);
    const { beneficiary, swift } = this.state.data;
    setTimeout(() => {
      toast.success(`Bank Account, Beneficiary ${beneficiary} SWIFT ${swift}`);
    }, 500);
  };

  render() {
    return (
      <div className="bank-account">
        <h1>Details Form</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Beneficiary</legend>
            {this.renderInput("beneficiary")}
          </fieldset>
          <fieldset>
            <legend>IBAN</legend>
            {this.renderInput("iban")}
          </fieldset>
          <fieldset>
            <legend>SWIFT</legend>
            {this.renderInput("swift")}
          </fieldset>
          <fieldset>
            <legend>Bank Currency</legend>
            {this.renderInput("bankCurrency")}
          </fieldset>
          {this.renderButton("Back", "/details", "button")}
          {this.renderButton("Next", "/owner", "submit")}
        </form>
      </div>
    );
  }
}

export default BankAccount;
