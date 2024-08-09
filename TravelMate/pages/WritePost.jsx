import Select from 'react-select';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import makeAnimated from 'react-select/animated';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import './WritePost.css';

const WritePost = () => {
  const [coverPhoto, setCoverPhoto] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Unsplashed API로부터 이미지를 불러옴
        const coverResponse = await axios.get('fG9OsW5TfoAs9L3zc4HkVu4t45E2nAMRaYFd_w6v8cc', { params: { query: 'cover' } });
        const profileResponse = await axios.get('fG9OsW5TfoAs9L3zc4HkVu4t45E2nAMRaYFd_w6v8cc', { params: { query: 'profile' } });
        setCoverPhoto(coverResponse.data.urls.regular);
        setProfilePhoto(profileResponse.data.urls.regular);
      } catch (error) {
        console.error('Failed to fetch images', error);
      }
    };

    fetchPhotos();
  }, []);

const animatedComponents = makeAnimated();

const [startDate, setStartDate] = useState(null);

const ageOptions = Array.from({ length: 46 }, (_, i) => 20 + i);

const CustomSelect = ({ options, defaultValue }) => (
    <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      defaultValue={defaultValue}
      options={options}
      isSearchable={false}
    />
  );

const options1 = [
  {
    value: 'option1-1',
    label: (
      <div>
        <strong>전체 동행</strong>
        <div style={{ fontSize: 'smaller' }}>하루 일정을 함께 할 여행자를 구합니다</div>
      </div>
    )
  },
  {
    value: 'option1-2',
    label: (
      <div>
        <strong>부분 동행</strong>
        <div style={{ fontSize: 'smaller' }}>하루 일정 중 특정 시간대에만 함께 할 여행자를 구합니다</div>
      </div>
    )
  },
  {
    value: 'option1-3',
    label: (
        <div>
          <strong>금전 동행</strong>
          <div style={{ fontSize: 'smaller' }}>여행 일정 중 숙소 및 교통 등 비용 부담만 함께 할 여행자를 구합니다</div>
        </div>
    )
  }
];

const options2 = [
    {
      value: 'option2-1',
      label: (
        <div>
          <strong>맛집 탐방</strong>
          <div style={{ fontSize: 'smaller' }}>맛집 투어, 카페, 디저트, 와인</div>
        </div>
      )
    },
    {
      value: 'option2-2',
      label: (
        <div>
          <strong>액티비티</strong>
          <div style={{ fontSize: 'smaller' }}>번지점프, 서핑, 사막 투어</div>
        </div>
      )
    },
    {
      value: 'option2-3',
      label: (
          <div>
            <strong>음악</strong>
            <div style={{ fontSize: 'smaller' }}>콘서트, 페스티벌, 버스킹, 음악 투어</div>
          </div>
      )
    },
    {
        value: 'option2-4',
        label: (
            <div>
              <strong>자연 탐험</strong>
              <div style={{ fontSize: 'smaller' }}>하이킹, 캠핑, 국립공원, 등산</div>
            </div>
        )
      },
      {
        value: 'option2-5',
        label: (
            <div>
              <strong>문화 체험</strong>
              <div style={{ fontSize: 'smaller' }}>박물관, 전시회, 역사 투어, 전통 공연</div>
            </div>
        )
      },
      {
        value: 'option2-6',
        label: (
            <div>
              <strong>스포츠</strong>
              <div style={{ fontSize: 'smaller' }}>축구 경기, 마라톤, 스키, 골프</div>
            </div>
        )
      },
      {
        value: 'option2-7',
        label: (
            <div>
              <strong>쇼핑</strong>
              <div style={{ fontSize: 'smaller' }}>시장, 아울렛, 로드샵, 기념품</div>
            </div>
        )
      },
      {
        value: 'option2-8',
        label: (
            <div>
              <strong>해양 활동</strong>
              <div style={{ fontSize: 'smaller' }}>스쿠버 다이빙, 스노클링, 요트, 낚시</div>
            </div>
        )
      },
      {
        value: 'option2-9',
        label: (
            <div>
              <strong>도시 탐방</strong>
              <div style={{ fontSize: 'smaller' }}>도심 투어, 야경, 랜드마크, 시티 투어</div>
            </div>
        )
      },
      {
        value: 'option2-10',
        label: (
            <div>
              <strong>휴식</strong>
              <div style={{ fontSize: 'smaller' }}>스파, 온천, 리조트, 힐링 프로그램</div>
            </div>
        )
      }
  ];

  CustomSelect.propTypes = {
    options: PropTypes.array.isRequired,
    defaultValue: PropTypes.any.isRequired
  };

  return (
    <div>
        <div className="profile-container px-0">
          <Container fluid>
          <Row>
            <Col>
              <Image src={coverPhoto} fluid alt="Cover" className="cover-image" />
            <div className="profile-header-wrapper row justify-content-start">
              <Image src={profilePhoto} rounded alt="Profile" className="profile-image col-2" />
              <h6 className="profile-title col-10">제목을 입력해주세요.(50자 이내)</h6>
            </div>
            </Col>
            <div className="warning-message">
              <p>⚠︎사진 미첨부 시, 기본 사진이 들어갑니다.</p>
            </div>
          </Row>
          <hr className="hr-div" />
          <Row>
            <Col xs={12} className="d-flex justify-content-end">
              <Button variant="primary" style={{ margin: '8px'}}>임시저장</Button>
              <Button variant="primary" style={{ margin: '8px'}}>발행</Button>
            </Col>
          </Row>
          </Container>
        </div>
      
        <hr className="hr-div" />
        
        <div className="main-content-wrapper">
            <Container fluid>
                <Row>
                  <Col md={8}>
                    <div className="post-wrapper">
                      <h5>동행 글쓰기</h5>

                      <div className="post">
                      <p>동행 유형을 선택해주세요.</p>
                      <CustomSelect options={options1} defaultValue={options1[0]} />
                      <br/>

                      <p>주요 활동을 선택해주세요. (중복 가능)</p>
                      <CustomSelect options={options2} defaultValue={options2[0]} />
                      <br/>

                      <p>여행지를 선택해주세요.</p>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="나라, 지역 혹은 도시를 입력하세요"/>
                      </Form.Group>
                      <br/>

                      <p>날짜를 선택해주세요.</p>
                      <Form>
                        <Row>
                          <Col>
                          <DatePicker
                          selected={startDate}
                            onChange={date => setStartDate(date)}
                            placeholderText="시작일"
                            dateFormat="yyyy/MM/dd"  // 날짜 형식 지정
                            className="custom-datepicker"
                            isSearchable={false}
                          />
                          </Col>

                          <Col>
                          <Form.Control type="text" placeholder="시작 시간" />
                          </Col>

                          <Col>
                          <DatePicker
                          selected={startDate}
                            onChange={date => setStartDate(date)}
                            placeholderText="종료일"
                            dateFormat="yyyy/MM/dd"  // 날짜 형식 지정
                            className="custom-datepicker"
                            isSearchable={false}
                          />
                          </Col>

                          <Col>
                          <Form.Control type="text" placeholder="종료 시간"/>
                          </Col>
                        </Row>
                      </Form>
                      <br/>

                      <p>언어를 선택해주세요.</p>
                      <Form.Control type="text" placeholder="동행자가 사용할 수 있는 언어를 선택해주세요"/>
                      <br/>

                      <p>선호하는 동행 나이와 성별을 선택해주세요.</p>
                      <Form>
                      <Row className="align-items-center">
                        <Col>
                        <select defaultValue=" ">
                            <option value=" " disabled selected>
                                이상
                            </option>
                           {ageOptions.map(age => (
                             <option key={age} value={age}>
                               {age}
                             </option>
                           ))}
                        </select>
                        </Col>

                        <Col>
                        <p>~</p>
                        </Col>

                        <Col>
                        <select defaultValue=" ">
                            <option value=" " disabled selected>
                                미만
                            </option>
                           {ageOptions.map(age => (
                             <option key={age} value={age}>
                               {age}
                             </option>
                           ))}
                        </select>
                        </Col>
                      </Row>
                      </Form>

                      <Form>
                       {['radio'].map((type) => (
                         <div key={`inline-${type}`} className="mb-3">
                           <Form.Check
                             inline
                             label="전체"
                             name="group1"
                             type={type}
                             id={`inline-${type}-1`}
                           />
                           <Form.Check
                             inline
                             label="여자"
                             name="group1"
                             type={type}
                             id={`inline-${type}-2`}
                           />
                           <Form.Check
                             inline
                             label="남자"
                             type={type}
                             id={`inline-${type}-3`}
                           />
                         </div>
                       ))}
                      </Form>
                      <br/>

                      <p>내용을 입력하세요.</p>
                      <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={3} placeholder="ex) 서로 사진 찍는거 좋아하시는 분이 왔으면 좋겠어요! 함께 걸으며 맛집 탐방할 예정입니다 :)"/>
                      </Form.Group>
                      <br/>

                      <p>참여인원을 설정하세요. (본인 포함)</p>
                      </div>
                    </div>
                  </Col>

                  <Col md={4}>
                  <div className="ads">
                    <h2>광고 페이지</h2>
                  </div>
                  <div className="ads">
                    <h2>광고 페이지</h2>
                  </div>
                  </Col>
                </Row>
            </Container>
        </div>
    </div>

  );
};

export default WritePost;
