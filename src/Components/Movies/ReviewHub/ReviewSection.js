import SectionTitle from "../SectionTitle/SectionTitle";

const ReviewSection=()=>{
 return (<>
 <div class="section">
    <div class="container">
       <SectionTitle title="Review Hub"/>
        <div class="hero-section">

            <div class="topsection">
                <div class="owl-carousel carousel-nav-center" id="rh-carousel">
                  
                        <a href="/reviews?name=<%=reviewdata[i]['MovieName']%>">
                            <div class="hero-slide-item">
                                <img src="<%=reviewdata[i]['imgurl']%>" alt=""/>
                                <div class="hero-slide-item-content">
                                    <div class="item-content-wraper">
                                        <div class="item-content-title top-down">
                                            {/* <%=reviewdata[i]['MovieName']%> */}
                                        </div>
                                        <div class="movie-infos top-down delay-2">
                                            <div class="movie-info">
                                                <i class="bx bxs-star"></i>
                                                <span>
                                                    {/* <%=reviewdata[i]['rating']%> */}
                                                </span>
                                            </div>
                                            <div class="movie-info">
                                                <i class="bx bxs-time"></i>
                                                <span>
                                                    {/* <%=reviewdata[i]['duration']%> mins */}
                                                </span>
                                            </div>
                                            <div class="movie-info">
                                                <span>HD</span>
                                            </div>

                                        </div>
                                        <div class="item-content-description top-down delay-4">
                                            {/* <%=reviewdata[i]['reviewdesc']%> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    


                </div>
            </div>
        </div>
    </div>
</div></>);
}

export default ReviewSection;