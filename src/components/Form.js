import "./form.css";
export default function Form() {
  return (
    <>
      <div className="form_outer">
        <div className="form_inner1">
          {/* <label>Lead Details</label> */}
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Name</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Parent Campaign</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Status</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Start Date</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>End Date</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Owner</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
        </div>
        {/* <div className="form_inner3">
          <div className="form_inner31">
            <label>Email</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Phone</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Mobile</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Addres</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>City</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>State</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Pin Code</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Lead Source Name</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Date Added On</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
        </div>
        <div className="form_inner3">
          <div className="form_inner31">
            <label>Active Status</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label>Lead owner</label><br/>
            <input type={"text"} className="form_rectangle"/>
          </div>
          <div className="form_inner31">
            <label></label>
            <div className="form_rectangle1"></div>
          </div>
        </div> */}
      </div>
    </>
  );
}