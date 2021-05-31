import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";
import { Table } from "./Table";




const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="vivek">
            <div className="card">
              <i
                className="fa fa-user-o fa-2x text-lightblue"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Number of Subscribers</p>
                <span className="font-bold text-title">578</span>
              </div>
            </div>

            <div className="card">
              <i
                className="fa fa-calendar fa-2x text-red"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Times of Watching</p>
                <span className="font-bold text-title">2467</span>
              </div>
            </div>
          </div>

          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="table">
        
          <Table/>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
       
        
        
      </div>
     
    </main>
  );
};

export default Main;
