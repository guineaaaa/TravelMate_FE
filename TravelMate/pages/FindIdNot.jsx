import { Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 가입되지 않은 회원 알림 페이지

const FindIdNot = () => {
    const navigate=useNavigate();

    const handleNextToSignup=()=>{
        navigate('/signup');
    }

    const handleNextToBefore=()=>{
        navigate('/findid');
    }

    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center"
            style={{ fontFamily: 'Pretendard', paddingTop: '5%', overflowX: 'hidden'}}>
            <Banner>는 TravelMate에 등록되어 있지 않은 계정입니다.</Banner>
            <div className="d-flex flex-column align-items-center mt-3 me-4" style={{marginTop:'-1rem', marginLeft: '10%',width:'30%' }}>
                <Button variant="primary" size="lg"
                    style={{
                        width: '29.1865rem',
                        height: '2.75rem',
                        flexShrink: '0',
                        borderRadius: '0.3125rem',
                        background: '#0064DC',
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '1rem',
                        fontWeight: '800'
                    }}
                    onClick={handleNextToSignup}
                >
                    회원가입하기
                </Button>
                <div style={{marginTop:'0.5rem'}}></div>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleNextToBefore}
                    style={{
                        width: '29.1865rem',
                        height: '2.75rem',
                        flexShrink: '0',
                        borderRadius: '0.3125rem',
                        border:'1px solid #707070',
                        background: 'var(--white, #FFF)',
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#707070',
                        textAlign: 'center',
                        fontSize: '1rem',
                        fontWeight: '800'
                    }}
                >
                    다시 확인
                </Button>
            </div>

        </Container>
    );
}



const Banner = styled.h5`
    text-align: left;
    color: #878787;
    font-family: "Pretendard";
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;
    margin-right:-5%;
`;

export default FindIdNot;
