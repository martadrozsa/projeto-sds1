import React from "react"
import Filters from "../../components/Filters";
import "./styles.css"
import Chart from "react-apexcharts"
import { barOptions } from "./chart-options";

const Charts = () => {
    return (
        <div className="page-container">
            <Filters link="/records" linkText="VER TABELA" />
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title">
                        Jogos mais votados
                    </h1>
                    <div className="games-container">
                        <Chart
                            options={barOptions}
                            type="bar"
                            width="900"
                            height="650"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts