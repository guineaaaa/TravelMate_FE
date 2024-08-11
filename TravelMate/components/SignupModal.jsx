import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';

// 약관 확인 모달
const SignupModal = ({ show, onHide }) => {
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [isServiceAgreementChecked, setIsServiceAgreementChecked] = useState(false);
    const [isTermsAgreementChecked, setIsTermsAgreementChecked] = useState(false);
    const [isPrivacyAgreementChecked, setIsPrivacyAgreementChecked] = useState(false);
    const [isAgeChecked, setIsAgeChecked] = useState(false);
    const [isEventNotificationChecked, setIsEventNotificationChecked] = useState(false);

    const handleAllCheckboxChange = (e) => {
        const checked = e.target.checked;
        setIsAllChecked(checked);
        setIsServiceAgreementChecked(checked);
        setIsTermsAgreementChecked(checked);
        setIsPrivacyAgreementChecked(checked);
        setIsAgeChecked(checked);
        setIsEventNotificationChecked(checked);
    };

    const handleCheckboxChange = (setter) => (e) => {
        setter(e.target.checked);
        if (
            isServiceAgreementChecked &&
            isTermsAgreementChecked &&
            isPrivacyAgreementChecked &&
            isAgeChecked &&
            isEventNotificationChecked
        ) {
            setIsAllChecked(true);
        } else {
            setIsAllChecked(false);
        }
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            dialogClassName="custom-modal"
        >
            <Modal.Header closeButton style={{ fontFamily: 'Pretendard', borderBottom: 'none' }}>
                <Modal.Title style={{
                    fontFamily: 'Pretendard',
                    marginTop: '1.56rem',
                    marginLeft: '0.5rem',
                    marginBottom: '-1.5rem',
                    width: '6.53256rem',
                    fontSize: '1.5rem',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '121.2%'
                }}>
                    약관확인
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div style={{
                    fontFamily: 'Pretendard',
                    marginLeft: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    lineHeight: '121.2%',
                    marginBottom: '6.13rem'
                }}>
                    개별 동의 선택이 가능하며, 필수 항목에 동의하여야 서비스 이용이 가능합니다.
                </div>

                <div className="form-check" style={{ marginLeft: '0.5rem' }}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkAll"
                        checked={isAllChecked}
                        onChange={handleAllCheckboxChange}
                        style={{ width: '1.5rem', height: '1.5rem' }}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="checkAll"
                        style={{
                            marginTop: '0.2rem',
                            marginLeft: '0.5rem',
                            fontSize: '1.125rem',
                            fontFamily: 'Pretendard',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '121.2%'
                        }}>
                        전체 동의 <span style={{ fontSize: '0.875rem', color: 'var(--Description, #707070)', fontWeight: '400' }}>(선택항목 포함)</span>
                    </label>
                </div>

                <hr />

                <div className="form-check" style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkServiceAgreement"
                        checked={isServiceAgreementChecked}
                        onChange={handleCheckboxChange(setIsServiceAgreementChecked)}
                        style={{ width: '1.5rem', height: '1.5rem' }}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="checkServiceAgreement"
                        style={{ marginLeft: '0.5rem', fontSize: '1.125rem', fontWeight: '600', fontFamily: 'Pretendard', fontStyle: 'normal' }}>
                        회원·서비스 가입 <span style={{ fontSize: '0.875rem', color: 'var(--main-color, #0074FF)', fontWeight: '400' }}>(필수)</span>
                    </label>
                </div>

                <div style={{ marginLeft: '4.5rem', marginBottom: '0.5rem' }}>
                    <div className="form-check" style={{ marginBottom: '0.5rem' }}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkTermsAgreement"
                            checked={isTermsAgreementChecked}
                            onChange={handleCheckboxChange(setIsTermsAgreementChecked)}
                            style={{ width: '1.25rem', height: '1.25rem' }}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="checkTermsAgreement"
                            style={{ marginLeft: '0.5rem', fontSize: '0.875rem', fontWeight: '400' }}>
                            회원가입 약관 <span style={{ fontSize: '0.75rem', color: 'var(--main-color, #0074FF)' }}>(필수)</span>
                        </label>
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkPrivacyAgreement"
                            checked={isPrivacyAgreementChecked}
                            onChange={handleCheckboxChange(setIsPrivacyAgreementChecked)}
                            style={{ width: '1.25rem', height: '1.25rem' }}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="checkPrivacyAgreement"
                            style={{ marginLeft: '0.5rem', fontSize: '0.875rem', fontWeight: '400' }}>
                            개인정보 수집 이용 동의 <span style={{ fontSize: '0.75rem', color: 'var(--main-color, #0074FF)' }}>(필수)</span>
                        </label>
                    </div>
                </div>

                <div className="form-check" style={{ marginLeft: '2.5rem', marginBottom: '0.5rem' }}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkAge"
                        checked={isAgeChecked}
                        onChange={handleCheckboxChange(setIsAgeChecked)}
                        style={{ width: '1.5rem', height: '1.5rem' }}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="checkAge"
                        style={{ marginLeft: '0.5rem', fontSize: '1.125rem', fontWeight: '600', fontFamily: 'Pretendard', fontStyle: 'normal' }}>
                        만 14세 이상입니다 <span style={{ fontSize: '0.875rem', color: 'var(--main-color, #0074FF)', fontWeight: '400' }}>(필수)</span>
                    </label>
                </div>

                <div className="form-check" style={{ marginLeft: '2.5rem' }}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkEventNotification"
                        checked={isEventNotificationChecked}
                        onChange={handleCheckboxChange(setIsEventNotificationChecked)}
                        style={{ width: '1.5rem', height: '1.5rem' }}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="checkEventNotification"
                        style={{ marginLeft: '0.5rem', color: 'var(--Description, #707070)', fontSize: '1.125rem', fontWeight: '600', fontFamily: 'Pretendard', fontStyle: 'normal' }}>
                        회원·서비스 이벤트 혜택 알림 <span style={{ fontSize: '0.875rem', color: 'var(--main-color, #707070)', fontWeight: '400' }}>(선택)</span>
                    </label>
                </div>
            </Modal.Body>
            <Modal.Footer style={{ borderTop: 'none' }}>
                <Button
                    style={{
                        width: '31.81rem',
                        height: '2.75rem',
                        flexShrink: '0',
                        borderRadius: '0.3125rem',
                        background: '#0064DC',
                        textAlign: 'center',
                        fontFamily: 'Pretendard',
                        fontSize: '1rem',
                        fontWeight: '500',
                        fontStyle: 'normal',
                    }}
                    variant="primary"
                    onClick={onHide}
                >
                    회원가입 완료
                </Button>
            </Modal.Footer>
            <style type="text/css">
                {`
                .custom-modal .modal-content {
                    border: none;
                    width: 34.0625rem;
                    height: 35.5625rem;
                    border-radius: 0.625rem;
                    background: #FFF;
                }
                `}
            </style>
        </Modal>
    );
};

export default SignupModal;
