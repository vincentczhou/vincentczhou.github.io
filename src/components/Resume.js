import React, { useState } from 'react'

import { useHashScroll } from 'react-hash-scroll'

import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5'
// import { Document, Page, pdfjs } from 'react-pdf'
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
// import 'react-pdf/dist/esm/Page/TextLayer.css'

import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { Button, ButtonGroup } from '@mui/material'
import {
  ArrowCircleLeftRounded as ArrowCircleLeftRoundedIcon,
  ArrowCircleRightRounded as ArrowCircleRightRoundedIcon,
  DownloadForOfflineRounded as DownloadForOfflineRoundedIcon,
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'

// pdfjs.GlobalWorkerOptions.workerSrc = `https//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const StyledButtonGroup = styled(ButtonGroup)`
  position: static;
  transform: translateY(-240%);
  transition: all 0.3s ease-in-out;
  ${(props) => (!props.showButtonGroup ? 'opacity: 0%; visibility: collapse;' : '')}
`

// const file = 'https://www.nhk.or.jp/lesson/update/pdf/leall_en_t.pdf'
const file = '/test.pdf'

const options = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  cMapPacked: true,
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
}

const Resume = ({ hash, options }) => {
  const scrollRef = useHashScroll(hash, options)

  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  const [progress, setProgress] = useState(0)

  const [showButtonGroup, setShowButtonGroup] = useState(false)
  const onMouseEnter = () => {
    console.log('over')
    setShowButtonGroup(true)
  }
  const onMouseLeave = () => {
    console.log('out')
    setShowButtonGroup(false)
  }
  const onClick = () => {
    setShowButtonGroup(!showButtonGroup)
  }

  return (
    <Container id="resume" ref={scrollRef}>
      <Document
        file={file}
        loading={<CircularProgress variant="determinate" value={progress} />}
        onLoadProgress={({ loaded, total }) => setProgress((loaded / total) * 100)}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        <Page
          loading={
            <Stack spacing={1} sx={{ padding: 3, width: 300 }}>
              <Skeleton variant="text" sx={{ fontSize: '32px' }} />
              <Skeleton variant="circular" width={69} height={69} />
              <Skeleton variant="rounded" width={251} height={90} />
              <Skeleton variant="rounded" width={251} height={90} />
              <Skeleton variant="rounded" width={251} height={90} />
              <Skeleton variant="text" sx={{ fontSize: '32px' }} />
            </Stack>
          }
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
        <StyledButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          showButtonGroup={showButtonGroup}
          onMouseEnter={onMouseEnter}
        >
          <Button disabled={pageNumber <= 1} onClick={previousPage}>
            <ArrowCircleLeftRoundedIcon />
          </Button>
          <Button disableRipple={true} fullWidth={true} variant="string">
            {pageNumber}/{numPages}
          </Button>
          <Button disabled={pageNumber >= numPages} onClick={nextPage}>
            <ArrowCircleRightRoundedIcon />
          </Button>
        </StyledButtonGroup>
      </Document>
      <Button
        size="large"
        variant="contained"
        endIcon={<DownloadForOfflineRoundedIcon />}
        target="_blank"
        rel="noopener noreferrer"
        href={file}
      >
        Download
      </Button>
    </Container>
  )
}

export default Resume
