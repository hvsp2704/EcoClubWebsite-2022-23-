import React from "react";
// import "./timeline.css";

export default class Timeline extends React.Component {
    render() {
        return (
            <>

                <div
                    className="container animated animated-done bootdey"
                    data-animate="fadeIn"
                    data-animate-delay="0.05"
                    style={{ animationDelay: "0.05s" }}
                >
                    <hr className="hr-lg mt-0 mb-2 w-10 mx-auto hr-primary" />
                    <h2 className="text-slab text-center text-uppercase mt-0 mb-5">
                        Events <span className="font-weight-bold">This Week</span>
                    </h2>
                    <div className="timeline timeline-left mx-lg-10">
                        <div className="timeline-breaker">Monday</div>
                        {/*Timeline item 1*/}
                        <div className="timeline-item mt-3 row text-center p-2">
                            <div className="col font-weight-bold text-md-right">West Ham</div>
                            <div className="col-1">vs</div>
                            <div className="col font-weight-bold text-md-left">Chelsea</div>
                            <div className="col-12 text-xs text-muted">
                                Football - English Premier League - 19:45 GMT
                            </div>
                        </div>
                        {/*Timeline item 2 - NOTE: the .right class*/}
                        <div className="timeline-item mt-3 row text-center p-2">
                            <div className="col font-weight-bold text-md-right">Man Utd</div>
                            <div className="col-1">vs</div>
                            <div className="col font-weight-bold text-md-left">Liverpool</div>
                            <div className="col-12 text-xs text-muted">
                                Football - English Premier League - 19:45 GMT
                            </div>
                        </div>
                        <div className="timeline-breaker timeline-breaker-middle">Tuesday</div>
                        <div className="timeline-item mt-3 row text-center p-2">
                            <div className="col font-weight-bold text-md-right">England</div>
                            <div className="col-1">vs</div>
                            <div className="col font-weight-bold text-md-left">India</div>
                            <div className="col-12 text-xs text-muted">
                                Cricket - 3rd test - from 10:45 GMT
                            </div>
                        </div>
                        <div className="timeline-item mt-3 row text-center p-2">
                            <div className="col font-weight-bold text-md-right">New Zealand</div>
                            <div className="col-1">vs</div>
                            <div className="col font-weight-bold text-md-left">South Africa</div>
                            <div className="col-12 text-xs text-muted">
                                Cricket - 5th test - from 15:45 GMT
                            </div>
                        </div>
                        <div className="timeline-item mt-3 row text-center p-2">
                            <div className="col font-weight-bold text-md-right">Man Utd</div>
                            <div className="col-1">vs</div>
                            <div className="col font-weight-bold text-md-left">Liverpool</div>
                            <div className="col-12 text-xs text-muted">
                                Football - Europa League - 19:45 GMT
                            </div>
                        </div>
                        <div className="timeline-breaker timeline-breaker-middle">Saturday</div>
                        <div className="timeline-item mt-3 row text-center p-2">
                            <div className="col font-weight-bold text-md-right">England</div>
                            <div className="col-1">vs</div>
                            <div className="col font-weight-bold text-md-left">India</div>
                            <div className="col-12 text-xs text-muted">
                                Cricket - 3rd test - from 10:45 GMT
                            </div>
                        </div>
                        <div className="timeline-item mt-3 row text-center p-2">
                            <div className="col font-weight-bold text-md-right">New Zealand</div>
                            <div className="col-1">vs</div>
                            <div className="col font-weight-bold text-md-left">South Africa</div>
                            <div className="col-12 text-xs text-muted">
                                Cricket - 5th test - from 15:45 GMT
                            </div>
                        </div>
                        <div className="timeline-breaker timeline-breaker-bottom">
                            More next week........
                        </div>
                    </div>
                </div>
            </>
        );
    }
}