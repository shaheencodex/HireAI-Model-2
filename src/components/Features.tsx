import React from 'react'
import jdIcon from '../assets/images/GenerateJD.svg'
import matchIcon from '../assets/images/ResumeMatch.svg'
import aiIcon from '../assets/images/AI-Interview.svg'
import reportIcon from '../assets/images/SummaryReport.svg'
import '../styles/Features.css'

export default function Features() {
  const items = [
    {
      icon: jdIcon,
      title: 'Generate JD',
      desc: 'Create precise, engaging job descriptions in seconds — tailored by AI to attract the right talent.'
    },
    {
      icon: matchIcon,
      title: 'Resume Match',
      desc: 'Instantly match resumes with your job requirements using smart AI filters that understand skills.'
    },
    {
      icon: aiIcon,
      title: 'AI Interview',
      desc: 'Let AI handle the first round — unbiased, consistent, and available 24/7 to assess every candidate.'
    },
    {
      icon: reportIcon,
      title: 'Summary Report',
      desc: 'Get clear, structured interview summaries and actionable insights to make hiring faster & smarter.'
    }
  ]

  return (
    <section style={{ width: '100%', marginTop: 28 }}>
      <div className="features-grid" style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 16px'
      }}>
        {items.map((it) => (
          <div key={it.title} style={cardStyle}>
            <div style={iconWrapStyle}>
              <img src={it.icon} alt="" width={24} height={24} />
            </div>
            <div style={{ fontWeight: 700, color: '#111827', marginTop: 12, fontSize: 16, fontFamily: 'manrope' }}>{it.title}</div>
            <div style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.7, marginTop: 10, fontFamily: 'manrope', fontWeight: 300 }}>{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

const cardStyle: React.CSSProperties = {
  background: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: 18,
  padding: 26,
  boxShadow: '0 12px 28px rgba(0,0,0,0.06)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  fontFamily: 'manrope',
  textAlign: 'left'
}

const iconWrapStyle: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: 12,
  background: '#f6faf9',
  border: '1px solid #e7f2ef',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
}
