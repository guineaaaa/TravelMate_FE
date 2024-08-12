import { useState } from "react";
import { Container, Modal, Button, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const FindId = () => {
    const [socialLogedInModal, setSocialLogedInModal] = useState(false);

    // 소셜 로그인 모달 
    const handleSocialLogedInModalClose = () => setSocialLogedInModal(false);
    const handleSocialLogedInModalShow = () => setSocialLogedInModal(true);

    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center"
            style={{ fontFamily: 'Pretendard', paddingTop: '5%', overflowX: 'hidden' }}>
            <Banner>이메일을 입력해주세요!<br />
                가입 여부를 확인해드릴게요.</Banner>

            <Form className="d-flex flex-column align-items-center mt-2 "
            style={{width:'30%',marginLeft:'7%'}}>
                <InputGroup className="mb-3" >
                    <Form.Control type="text" placeholder="이메일 계정" />
                </InputGroup>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleSocialLogedInModalShow}
                    style={{width:'100%'}}
                >
                    확인
                </Button>
            </Form>

            {/* 비밀번호 찾기 - 존재하지 않는 이메일 모달 */}
            <StyledModal
                show={socialLogedInModal}
                onHide={handleSocialLogedInModalClose}
                centered
                size="lg"
            >
                <Modal.Body>
                    <p>
                        소셜 계정 로그인 안내
                    </p>
                    <p>
                        입력하신 계정은 소셜 계정으로 가입한 계정입니다. 가입때 사용한 소셜 계정으로 로그인해주세요.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={handleSocialLogedInModalClose}
                    >
                        확인
                    </Button>
                </Modal.Footer>
            </StyledModal>
        </Container>
    );
}

const StyledModal = styled(Modal)`
    .modal-dialog {
        max-width: 90vw;
        margin: auto;
    }
    .modal-content {
        padding: 3rem;
    }
    .modal-body {
        padding: 2rem;
    }
    .modal-footer {
        padding: 1rem;
        justify-content: center;
    }
`;

const Banner = styled.h5`
    text-align: left;
    color: #878787;
    font-family: "Pretendard";
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;
    margin-right:14%;
`;

export default FindId;
