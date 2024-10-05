import React from "react";
import "./project.css";
import TitleHeader from "../../components/title-header";
export default function Project() {
  return (
    <>
      <div className="slide"></div>
      <div className="section portfolio">
        <TitleHeader first={"my"} second={"projects"} third={"work"} />
        <div className="container">
          <div className="tab">
            <ul className="tab__nav">
              <li className="tab__nav-item">HTML/CSS/JAVASCRIPT</li>
              <li className="tab__nav-item">REACT</li>
              <li className="tab__nav-item">API</li>
              <li className="tab__nav-item">ALL</li>
            </ul>

            <div className="tab__panel">
              <div className="portfolio-card">
                <div
                  className="bg-wrap"
                  // style={{ backgroundImage: `url(${item.thumbUrl[0]})` }}
                >
                  <img
                    src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-phong-canh-3d-001.jpg"
                    alt=""
                  />
                </div>
                <h3>title</h3>
              </div>

              <div className="portfolio-card">
                <div
                  className="bg-wrap"
                  // style={{ backgroundImage: `url(${item.thumbUrl[0]})` }}
                >
                  <img
                    src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-phong-canh-3d-001.jpg"
                    alt=""
                  />
                </div>
                <h3>title</h3>
              </div>
              <div className="portfolio-card">
                <div
                  className="bg-wrap"
                  // style={{ backgroundImage: `url(${item.thumbUrl[0]})` }}
                >
                  <img
                    src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-phong-canh-3d-001.jpg"
                    alt=""
                  />
                </div>
                <h3>title</h3>
              </div>
              <div className="portfolio-card">
                <div
                  className="bg-wrap"
                  // style={{ backgroundImage: `url(${item.thumbUrl[0]})` }}
                >
                  <img
                    src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-phong-canh-3d-001.jpg"
                    alt=""
                  />
                </div>
                <h3>title</h3>
              </div>
              <div className="portfolio-card">
                <div
                  className="bg-wrap"
                  // style={{ backgroundImage: `url(${item.thumbUrl[0]})` }}
                >
                  <img
                    src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-phong-canh-3d-001.jpg"
                    alt=""
                  />
                </div>
                <h3>title</h3>
              </div>
            </div>

            {/* <TabPanel className="tab__panel">
              {portfolio
                .filter((item) => item.tags.includes("javascript"))
                .map((filteredItem, i) => (
                  <PortfolioCard
                    item={filteredItem}
                    id={filteredItem.id}
                    key={i}
                  />
                ))}
            </TabPanel>
            <TabPanel className="tab__panel">
              {portfolio
                .filter((item) => item.tags.includes("react"))
                .map((filteredItem, i) => (
                  <PortfolioCard
                    item={filteredItem}
                    id={filteredItem.id}
                    key={i}
                  />
                ))}
            </TabPanel>
            <TabPanel className="tab__panel">
              {portfolio
                .filter((item) => item.tags.includes("web api"))
                .map((filteredItem, i) => (
                  <PortfolioCard
                    item={filteredItem}
                    id={filteredItem.id}
                    key={i}
                  />
                ))}
            </TabPanel>
            <TabPanel className="tab__panel">
              {portfolio.map((item, i) => (
                <PortfolioCard item={item} id={item.id} key={i} />
              ))}
            </TabPanel> */}
          </div>
        </div>
      </div>
      {/* {portfolio.map((item, i) => (
        <PortfolioDetail item={item} id={item.id} key={i} />
      ))} */}
    </>
  );
}
