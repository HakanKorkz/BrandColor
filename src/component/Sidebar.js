import {useState} from "react";
import {GrClose} from "react-icons/gr";
import Modal from "react-modal";
function Sidebar() {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    }
    return (
        <>
            <aside className='sidebar'>
                <div className="logo">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>Brand <b>Color</b> Clone</a>
                </div>
                <div className="description">
                    The biggest collection of official brand color codes around. Curated by @brand-colors and friends.
                </div>
                <div className="menus">
                    <li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a onClick={toggleModal}>About</a>
                    </li>
                </div>
            </aside>
            <Modal isOpen={modalIsOpen}
                   onRequestClose={toggleModal}
                   className="about-modal"
                   overlayClassName="about-modal-overlay">
                <button onClick={toggleModal} className='about-btn-close'>
                    <GrClose/>
                </button>

                <h3>
                    About BrandColors
                </h3>
                <p>
                    BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.
                </p>
                <p>
                    It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.

                </p>

            </Modal>
        </>
    )

}

export default Sidebar
