import Modal from 'react-modal';
import modalStylesObject from './modalStylesObject.js';
import React, { useEffect, useState } from 'react';

const ModalWrapper = () => {
    const [isOpen, setOpen] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        document.addEventListener('customAlert', e => {
            setData(e?.detail?.payload);
            setOpen(true);
            if (!e?.detail?.payload || e.detail.hide) {
                setOpen(false);
            }
        });
        document.addEventListener('defaultModal', e => {
            setData(e?.detail?.payload);
            setOpen(true);
            if (!e?.detail?.payload || e.detail.hide) {
                setOpen(false);
            }
        });
    }, []);
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => {
                    setOpen(false);
                }}
                style={modalStylesObject}
            >
                {data}
            </Modal>
        </>
    );
};
export default ModalWrapper;
