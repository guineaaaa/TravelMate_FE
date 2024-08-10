import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';
import { WarnIcon } from '../src/constants/icons';

// 비로그인 상태에서 로그인 권한이 필요한 페이지 선택 시 표시되는 모달
const MainPageModal = ({ show, onHide}) => {
    return (
        <StyledModal show={show} onHide={onHide} centered>
            <Modal.Header style={{ borderBottom: 'none' }} closeButton />
            <Modal.Body>
                <div style={{ marginBottom: '0.94rem', marginLeft: '1.81rem' }}>
                    <WarnIcon />
                </div>
                <p style={{
                    color: '#486284',
                    fontFamily: 'Pretendard', fontSize: '1.5rem', fontWeight: '700', lineHeight: '2.5rem', letterSpacing: '0.03125rem',
                    marginLeft: '1.81rem', marginRight: '1.19rem',
                }}>
                    프로필 정보가 등록된,<br />멤버만 이용할 수 있어요
                </p>

                <p style={{
                    color: '#486284',
                    fontFamily: 'Pretendard', fontSize: '0.9375rem', fontWeight: '400', lineHeight: '1.5rem', letterSpacing: '0.03125rem',
                    marginLeft: '1.81rem', marginRight: '1.19rem',
                }}>
                    신뢰할 수 있는 커뮤니티를 만들기 위해<br />
                    프로필 정보가 등록된 멤버만 이용할 수 있어요
                </p>
            </Modal.Body>
            <Modal.Footer style={{ marginTop: '1.36rem', borderTop: 'none', justifyContent: 'center' }}>
                <Button
                    style={{
                        width: '19.5rem', height: '3.2rem',
                        borderRadius: '1.875rem',
                        background: '#000',
                        border: 'none', flexShrink: '0',
                        paddingTop: '0.1rem', 
                        textAlign: 'center', fontFamily: 'Pretendard',
                        fontSize: '0.9375rem', fontWeight: '400', lineHeight: '3.125rem'
                    }}
                    href="/signup"
                >
                    5초 만에 프로필 완성하고 바로 시작하기
                </Button>
            </Modal.Footer>
        </StyledModal>
    );
}

const StyledModal = styled(Modal)`
    .modal-dialog {
        width: 90%;
        max-width: 26.375rem;
        height: 24.25rem; 
        display: flex;
    }

    .modal-content {
        border-radius: 0; 
    }

    .modal-body {
        overflow: hidden;
    }
`;

export default MainPageModal;