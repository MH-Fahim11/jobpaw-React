import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Blog1 from "../../assets/images/blog/blog-1.png";
import Blog2 from "../../assets/images/blog/blog-2.png";
import Blog3 from "../../assets/images/blog/blog-3.png";
import { createSlug } from "../Menjobs/Jobfrom";

export const researchPapers = [
  {
    image: Blog1,
    title: "Guide to HR Adviser and Clients Lessening",
    publicationDate: "2023-05-15",
    authors: "John DOE",
    keywords: ["Deep Learning", "Image Recognition", "Neural Networks"],
    abstract:
      "This paper explores various deep learning techniques for image recognition, including convolutional neural networks (CNNs), recurrent neural networks (RNNs), and deep belief networks (DBNs). It discusses the applications of these techniques in computer vision tasks such as object detection, image classification, and semantic segmentation.",
  },
  {
    image: Blog2,
    title: "Top Skin care tips for oily skins",
    publicationDate: "2023-05-15",
    authors: "Michel Jackson",
    keywords: ["Deep Learning", "Image Recognition", "Neural Networks"],
    abstract:
      "This paper explores various deep learning techniques for image recognition, including convolutional neural networks (CNNs), recurrent neural networks (RNNs), and deep belief networks (DBNs). It discusses the applications of these techniques in computer vision tasks such as object detection, image classification, and semantic segmentation.",
  },
  {
    image: Blog3,
    title: "Outstanding island for winter sun",
    publicationDate: "2023-05-15",
    authors: "Omar sanny",
    keywords: ["Deep Learning", "Image Recognition", "Neural Networks"],
    abstract:
      "This paper explores various deep learning techniques for image recognition, including convolutional neural networks (CNNs), recurrent neural networks (RNNs), and deep belief networks (DBNs). It discusses the applications of these techniques in computer vision tasks such as object detection, image classification, and semantic segmentation.",
  },
];

function Blog() {
  return (
    <div style={{backgroundColor:"#40E0D0"}} className="my-5">
      <section className="blog-one container">
        <div className="">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">New updates</h6>
            <h3 className="sec-title__title">Latest Research Papers</h3>
          </div>
        </div>
        <div className="row gutter-y-30  mx-auto  blog-slider">
          {researchPapers.slice(0, 3).map((paper, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="item" key={index}>
                <div
                  className="blog-card wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay={`${index * 100}ms`}
                >
                  <div className="blog-card__image">
                    <img src={paper.image} alt={paper.title} />
                  </div>
                  <div className="blog-card__content">
                    <div style={{ width: "140px" }} className="blog-card__date">
                      {paper.publicationDate}
                    </div>
                    <h3 className="blog-card__title mt-4">
                      <Link to="/blog-details">{paper.title}</Link>
                    </h3>
                    <p className="blog-card__info">
                      {paper.abstract.slice(0, 70)}...
                    </p>
                    <p>Author: {paper.authors}</p>
                    <Link
                      to={`/professionnels/consult-research-work/${createSlug(
                        paper?.title
                      )}`}
                      className="blog-card__link"
                    >
                      Read more
                      <i className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link
            to={`/professionnels/consult-research-work/`}
            className="hiredots-btn"
          >
            More research paper
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Blog;
