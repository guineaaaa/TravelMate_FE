import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { WarnIcon } from '../src/constants/icons';

const MainPageModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className="border-0" />
            <Modal.Body className="text-center">
                <div className="mb-3 ml-4">
                    <WarnIcon />
                </div>
                <p className="text-primary font-weight-bold" style={{ fontSize: '1.5rem', lineHeight: '2.5rem', letterSpacing: '0.03125rem' }}>
                    프로필 정보가 등록된,<br />멤버만 이용할 수 있어요
                </p>
                <p className="text-secondary" style={{ fontSize: '0.9375rem', lineHeight: '1.5rem', letterSpacing: '0.03125rem' }}>
                    신뢰할 수 있는 커뮤니티를 만들기 위해<br />
                    프로필 정보가 등록된 멤버만 이용할 수 있어요
                </p>
            </Modal.Body>
            <Modal.Footer className="border-0 justify-content-center mt-4">
                <Button
                    href="/signup"
                    style={{
                        width: '19.5rem',
                        height: '3.2rem',
                        borderRadius: '1.875rem',
                        backgroundColor: '#000',
                        border: 'none',
                        paddingTop: '0.1rem',
                        textAlign: 'center',
                        fontSize: '0.9375rem',
                        fontWeight: '400',
                        lineHeight: '3.125rem'
                    }}
                >
                    5초 만에 프로필 완성하고 바로 시작하기
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MainPageModal;
