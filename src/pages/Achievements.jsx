import { achievements } from "../data/data";
import { useState } from "react";

export default function Achievements() {
    const [modalImage, setModalImage] = useState(null);

    function showImageModal(imageSrc) {
        setModalImage(imageSrc); // Set the image to display in the modal
    }

    function closeImageModal() {
        setModalImage(null); // Close the modal by clearing the image
    }

    return (
        <div className="achievements">
            <div className="achievement-intro">
                <h1>Achievements & Certification</h1>
                <p>
                    Highlights of my achievements and certifications, showcasing skills gained through learning and development
                </p>
            </div>
            <div className="achievement-section">
                {achievements.map(({ name, description, date_issued, img_preview }) => (
                    <div className="achievement" key={name}>
                        <div
                            className="achievement-image"
                            onClick={() => showImageModal(img_preview)}
                        >
                            <img src={img_preview} alt={name} />
                        </div>
                        <div className="achievement-detailed">
                            <h5>{name}</h5>
                            <p>
                                <strong>Date issued:</strong>
                                <br /> {date_issued}
                            </p>
                            <p>
                                <strong>Description:</strong>
                                <br /> {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {modalImage && (
                <div className="modal" onClick={closeImageModal}>
                    <span className="close">&times;</span>
                    <img src={modalImage} alt="Full-Size Achievement" />
                </div>
            )}
        </div>
    );
}
