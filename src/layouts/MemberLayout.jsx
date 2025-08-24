import { Container, Button, Row, Col, Image } from 'react-bootstrap'
import '../styles/DashboardLayout.css'

const menuItems = [
  'My Dashboard',
  'My Profile',
  'Contact Support',
  'Referral Program',
  'Upgrades',
  'Upload',
  'Help and Feedback'
]

const Text = ({ children, className = '', as: Component = 'span', ...props }) => {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  )
}

export default function MemberLayout({ children }) {

  const activeItem = 'My Dashboard'

  const user = {fullname:'Eliezer Kombe'}

  const getInitials = (fullName) => {
    const parts = fullName.trim().split(' ').filter(Boolean);
    if (parts.length === 0) return '';
    const first = parts[0]?.charAt(0) ?? '';
    const last = parts[parts.length - 1]?.charAt(0) ?? '';
    return (first + last).toUpperCase();
  };

  return (
    <Container fluid>
        <Container fluid style={{height:'40px', borderBottom: '0.6px solid #FF4E4E66',  paddingTop:15}}>
            <Container className="d-flex">
                <div style={{marginLeft:'auto'}}>
                    <span style={{marginRight:10}}>
                        <i className="bi bi-telephone-fill"></i>
                    </span>
                    <span>1-(888)-329-7069</span>
                </div>
                    
            </Container>
        </Container>
        <Container>
            <div className="container-fluid">
                <div className="row g-0">
                    {/* Sidebar */}
                    <nav className="col-12 col-md-3 col-xl-2 sidebar d-flex flex-column align-items-center">
                        {/* Logo */}
                        <div className="logo-container mt-4 mb-3" style={{width:200}}>
                            <img src="/src/assets/gttsonline.png" alt="Logo" className="img-fluid logo" />
                        </div>

                        {/* Profile with circular progress */}
                        <div className="d-flex position-relative mb-4" style={{width:180, margin:'40px 0', alignItems:'center', justifyContent:'center', backgroundColor: ['purple', 'green', 'orange', '#04b8fc'][Math.floor(Math.random() * 4)], borderRadius:'50%'}}>
                            <svg width="180" height="180" className="progress-ring" style={{position:'absolute'}}>
                                <circle
                                    cx="90"
                                    cy="90"
                                    r="80"
                                    fill="none"
                                    stroke="#E7F4FF"
                                    strokeWidth="20"
                                />
                                <circle
                                    cx="90"
                                    cy="90"
                                    r="80"
                                    fill="none"
                                    stroke="url(#progressGradient)"
                                    strokeWidth="20"
                                    strokeDasharray="314"
                                    strokeDashoffset="60"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#79C3FF" />
                                    <stop offset="100%" stopColor="#79C3FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className='d-flex' style={{width:180, height:180, alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bold', fontSize:32}}>
                                {user?.avatar?<img
                                    src="/profile.jpg"
                                    alt="Profile"
                                    className="profile-img"
                                />:<Text>{getInitials(user?.fullname)}</Text>}
                            </div>
                        </div>

                        {/* Menu items */}
                        <div className="menu w-100 px-3">
                            {menuItems.map(item => (
                            <div
                                key={item}
                                className={`menu-item ${item === activeItem ? 'active' : ''}`}
                            >
                                {item}
                            </div>
                            ))}
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '2rem', paddingBottom:10 }}>
                            <a href="/help" style={{textDecoration:'none', color:'#34547D'}}>
                                <i className='bi bi-question-circle' style={{ marginRight: '6px' }} />
                                Help and Feedback
                            </a>
                        </div>

                    </nav>

                    {/* Main content */}
                    <main className="col main-content" style={{paddingLeft:20}}>
                        <div className="header py-3 px-3 d-flex" style={{height:80, alignItems:'center'}}>
                            <Button style={{marginLeft:'auto', background:'#004985', borderRadius:19, height:46, padding:'0 20px'}}>
                                <span>
                                    <i className="bi bi-person"></i>
                                </span>
                                <span style={{marginLeft:10}}>Logout</span>
                            </Button>
                        </div>

                        {/* Main Content with Header */}
                        <div className="content px-3 py-3">
                            {/* Dashboard Header */}
                            <div className="mb-4">
                                {/* Upper Section */}
                                <Row className="align-items-center mb-3" style={{ padding:0}}>
                                        {/* Left: Welcome Text */}
                                        <Col>
                                            <div style={{ fontWeight: 'bold', color: '#004985' }}>
                                            <h1 className="mb-0">Welcome,</h1>
                                            <h1>{user?.fullname}</h1>
                                            </div>
                                            {/* This was a Row with a plain div child; wrap it in Col so width matches */}
                                            <Row className="g-0">
                                                <Col xs={12}>
                                                    <div
                                                    className="d-flex"
                                                    style={{
                                                        height: 60,
                                                        borderRadius: 30,
                                                        border: '0.6px solid #004985',
                                                        alignItems: 'center',
                                                        padding: '0 16px'
                                                    }}
                                                    >
                                                    <div>
                                                        <Image src="/src/assets/dashboard-dart-image.png" />
                                                    </div>
                                                    <Text style={{ color: '#004985', marginLeft: 10 }}>Chapter 1 Page 2</Text>
                                                    <div
                                                        style={{
                                                        border: '0.6px solid #004985',
                                                        color: '#004985',
                                                        borderRadius: 30,
                                                        marginLeft: 'auto',
                                                        padding: 10
                                                        }}
                                                    >
                                                        <Text>Continue</Text>
                                                        <i className="bi bi-arrow-right" style={{ color: '#004985', marginLeft: 10 }}></i>
                                                    </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            {/* Court date / Days left — equal width & equal height */}
                                            <Row className="g-2 align-items-stretch" style={{ marginTop: 0 }}>
                                            <Col xs={6} className="d-flex">
                                                <div className="stat-card flex-fill">
                                                <div>
                                                    <i className="bi bi-calendar"></i>
                                                    <span style={{ marginLeft: 5 }}>Court Due Date:</span>
                                                </div>
                                                <div style={{ fontWeight: 'bold', fontSize: 14 }}>09/11/2025</div>
                                                </div>
                                            </Col>

                                            <Col xs={6} className="d-flex">
                                                <div className="stat-card flex-fill">
                                                <div>
                                                    <i className="bi bi-battery"></i>
                                                    <span style={{ marginLeft: 5 }}>Days left:</span>
                                                </div>
                                                <div style={{ fontWeight: 'bold', fontSize: 20 }}>62</div>
                                                </div>
                                            </Col>
                                            </Row>
                                        </Col>


                                        {/* Right: Custom Text */}
                                        <Col className="text-end">
                                            <div style={{border:'0.6px solid #004985', borderRadius:20, padding:20}}>
                                                <div>
                                                    <div className='d-flex' style={{padding:'0 20px'}}>
                                                        <svg width="22" height="22" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M26.7037 0L33.3136 8.92176L37.6724 7.49019L41.6508 18.7005H43.6504V42.7267H0V18.7005H1.06008V18.6804L2.40701 18.6924L26.7037 0ZM16.4146 18.7005H37.2587L35.1032 12.6278L31.9396 13.6029L16.4146 18.7005ZM13.1762 15.531L29.2042 10.2712L25.8701 5.76631L13.1762 15.531ZM8.31436 22.7048H4.15718V26.7092C5.25974 26.7092 6.31713 26.2873 7.09675 25.5364C7.87638 24.7854 8.31436 23.7669 8.31436 22.7048ZM29.1003 30.7136C29.1003 29.7933 28.9121 28.8821 28.5465 28.0319C28.1809 27.1817 27.645 26.4091 26.9695 25.7584C26.2939 25.1077 25.4919 24.5915 24.6093 24.2394C23.7266 23.8872 22.7806 23.7059 21.8252 23.7059C20.8698 23.7059 19.9238 23.8872 19.0412 24.2394C18.1585 24.5915 17.3565 25.1077 16.681 25.7584C16.0054 26.4091 15.4695 27.1817 15.1039 28.0319C14.7383 28.8821 14.5501 29.7933 14.5501 30.7136C14.5501 32.5721 15.3166 34.3546 16.681 35.6688C18.0453 36.9829 19.8957 37.7213 21.8252 37.7213C23.7547 37.7213 25.6051 36.9829 26.9695 35.6688C28.3338 34.3546 29.1003 32.5721 29.1003 30.7136ZM39.4932 38.7223V34.718C38.3907 34.718 37.3333 35.1399 36.5537 35.8908C35.774 36.6418 35.336 37.6603 35.336 38.7223H39.4932ZM35.336 22.7048C35.336 23.7669 35.774 24.7854 36.5537 25.5364C37.3333 26.2873 38.3907 26.7092 39.4932 26.7092V22.7048H35.336ZM4.15718 38.7223H8.31436C8.31436 37.6603 7.87638 36.6418 7.09675 35.8908C6.31713 35.1399 5.25974 34.718 4.15718 34.718V38.7223Z" fill="#072E60"/>
                                                        </svg>
                                                        <h5 style={{marginLeft:10, color:'#004985'}}>Make Money</h5>
                                                    </div>
                                                    <Col style={{textAlign:'start', color:'#004985', fontSize:12, padding:'0 20px'}}>
                                                        <Text>Refer friends to our website and make $2.00 per referral! Not only that, but your friend will get a $1.00 discount on the course!</Text>
                                                    </Col>
                                                    <Col style={{textAlign:'center', color:'#004985', fontSize:16, padding:'10px 0'}}>
                                                        <Text><b>IT'S SIMPLE</b></Text>
                                                    </Col>
                                                    <div className="d-flex" style={{textAlign:'start', fontSize:12, color:'#004985', padding:'0 20px'}}>
                                                        <div className="w-50" style={{padding:'0 40px 0 0'}}>
                                                            <Text>Total Referrals</Text>
                                                            <h4>0</h4>
                                                            <div className='w-100' style={{height:20, borderRadius:10, background: 'linear-gradient(90deg, #0062FF 0%, #7DB2F5 40%, #FFFFFF 100%)'}}></div>
                                                        </div>
                                                        <div className="w-50" style={{padding:'0 40px 0 0'}}>
                                                            <Text>Total Paid</Text>
                                                            <h4>$0.00</h4>
                                                            <div className='w-100' style={{height:20, borderRadius:10, background: 'linear-gradient(90deg, #FF9D00 0%, #FFFFFF 100%)'}}></div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    {/* Lower Section: Page Title */}
                                    <Row className="mt-3 g-0">
                                        <Col xs={12}>
                                            <div className="title-card">
                                            <h2 className="fw-bold m-0">Dashboard</h2>
                                            </div>
                                        </Col>
                                        <Col xs={12} className="mt-3">
                                            <div className="progress-wrap">
                                            <div className="progress-fill" style={{ width: '50%' }}></div>
                                            </div>
                                            <div className="d-flex gap-3 align-items-center mt-2">
                                            <div className="d-flex gap-2 align-items-center">
                                                <div className="legend-dot complete"></div>
                                                <span>Complete</span>
                                            </div>
                                            <div className="d-flex gap-2 align-items-center">
                                                <div className="legend-dot incomplete"></div>
                                                <span>Incomplete</span>
                                            </div>
                                            </div>
                                        </Col>
                                    </Row>
                            </div>

                            {/* Page Body */}
                        
                        </div>
                    </main>
                </div>
            </div>
        </Container>
        <div style={{height:40}}></div>
    </Container>
  )
}
