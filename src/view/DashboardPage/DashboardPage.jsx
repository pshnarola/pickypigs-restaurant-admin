import React from "react";
import CommonTableComp from "../../components/CommonTableComp/CommonTableComp";
import DonutChart from "../../components/DonutChart/DonutChart";
import "./DashboardPage.scss";

const DashboardPage = () => {
    const data1 = [{ name: 'Nuts', value: 10 }, { name: 'Milk', value: 15 },
    { name: 'Celery', value: 25 }, { name: 'Other', value: 50 }];
    const COLORS1 = ['#d1b2f5', '#91eddb', '#e376b8', '#f8e3e9'];

    const data2 = [{ name: 'Vegetarian', value: 87 }, { name: 'Plant Base', value: 47 },
    { name: 'Halal', value: 10 }, { name: 'Other', value: 12 }, { name: 'Group E', value: 13 }];
    const COLORS2 = ['#91eddb', '#d44fa0', '#d6f5ef', '#9e6be1', '#eedc81'];

    const data3 = [{ name: 'Pregnant', value: 87 }, { name: 'Vegan', value: 47 },
    { name: 'Organic', value: 10 }, { name: 'Other', value: 50 }];
    const COLORS3 = ['#d1b2f5', '#91eddb', '#e376b8', '#f8e3e9'];
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-heading brandon-Medium">
                        <h4><span className="fw-600">Tuesday, 18 March 2020</span><small className="brandon-regular ml-3">7:45 PM</small></h4>
                    </div>
                </div>
            </div>


            <div className="row mt-5 pt-2 mb-5 pb-1">
                <div className="col-md-12 col-lg-3 col-xl-3">
                    <p className="text-uppercase sub-heading brandon-Medium mb-5">Stats & Figures</p>
                    <h5 className="brandon-Medium stats-label">Dishes <span className="pink-txt">200</span></h5>
                    <h5 className="brandon-Medium stats-label">Amends <span className="pink-txt">180</span></h5>
                    <h5 className="brandon-Medium stats-label">Orders <span className="pink-txt">150</span></h5>
                    <h5 className="brandon-Medium stats-label">PP Users <span className="pink-txt">200</span></h5>
                    <h5 className="brandon-Medium stats-label">Top Dish Kina <span className="pink-txt">Kina Gyoza</span></h5>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
                    <div className="text-right mb-5">
                        <button className="text-uppercase sub-heading brandon-Medium viewstats-btn">View all stats</button>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <DonutChart length="120" name="Allergies" data={data1} COLORS={COLORS1} />
                        </div>
                        <div className="col-md-4">
                            <DonutChart length="20" name="Dietaries" data={data2} COLORS={COLORS2} />
                        </div>
                        <div className="col-md-4">
                            <DonutChart length="10" name="Lifestyle" data={data3} COLORS={COLORS3} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <hr className="gray-hr"></hr>
                </div>
            </div>

            <CommonTableComp />
        </>
    )
}

export default DashboardPage;