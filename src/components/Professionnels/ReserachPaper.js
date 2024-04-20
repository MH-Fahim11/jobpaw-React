import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Main";
import { createSlug } from "../Menjobs/Jobfrom";
import { researchPapers } from "../Menhomeone/Blog";

// export const researchPapers = [
//   {
//     title: "Deep Learning Techniques for Image Recognition",
//     authors: ["John Doe", "Jane Smith"],
//     publicationDate: "2023-05-15",
//     journal: "Journal of Artificial Intelligence",
//     abstract:
//       "This paper explores various deep learning techniques for image recognition, including convolutional neural networks (CNNs), recurrent neural networks (RNNs), and deep belief networks (DBNs). It discusses the applications of these techniques in computer vision tasks such as object detection, image classification, and semantic segmentation.",
//     keywords: ["Deep Learning", "Image Recognition", "Neural Networks"],
//     link: "https://example.com/paper1",
//   },
//   {
//     title: "Advancements in Natural Language Processing",
//     authors: ["Alice Johnson", "Bob Brown"],
//     publicationDate: "2022-11-20",
//     journal: "International Conference on Natural Language Processing",
//     abstract:
//       "Natural Language Processing (NLP) has seen significant advancements in recent years, driven by the availability of large-scale datasets and powerful machine learning models. This paper provides an overview of recent developments in NLP, including transformer-based architectures, pretraining techniques, and applications in tasks such as text generation, sentiment analysis, and machine translation.",
//     keywords: ["NLP", "Machine Learning", "Text Processing"],
//     link: "https://example.com/paper2",
//   },
//   {
//     title: "Quantum Computing: A Comprehensive Overview",
//     authors: ["Michael Lee", "Emily Wang"],
//     publicationDate: "2024-02-08",
//     journal: "Quantum Computing Review",
//     abstract:
//       "This paper provides a comprehensive overview of quantum computing, covering key concepts such as qubits, quantum gates, and quantum algorithms. It discusses the current state of quantum hardware and software, challenges in quantum error correction, and potential applications in cryptography, optimization, and simulation.",
//     keywords: ["Quantum Computing", "Quantum Algorithms"],
//     link: "https://example.com/paper3",
//   },
// ];

const ReserachPaper = () => {
  return (
    <div>
      <Breadcrumb subtitle="Home / Professionnels" title="Research paper" />
      <div className="row gutter-y-30  mx-auto  blog-slider container my-5">
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
    </div>
  );
};

export default ReserachPaper;
