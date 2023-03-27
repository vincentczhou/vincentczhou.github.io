import { forwardRef, useState } from 'react'
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Button, ButtonGroup } from '@mui/material'
import {
  ArrowCircleLeftRounded as ArrowCircleLeftRoundedIcon,
  ArrowCircleRightRounded as ArrowCircleRightRoundedIcon,
  DownloadForOfflineRounded as DownloadForOfflineRoundedIcon,
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

// const file = 'https://www.nhk.or.jp/lesson/update/pdf/leall_en_t.pdf'
// const file = '/static/Resume 2022.12.03.pdf'
const file = '/static/Resume 2023.03.26.pdf'

const options = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  cMapPacked: true,
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
}

const StyledDocument = styled(Document)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledPage = styled(Page)`
  margin: 15px;
  max-width: calc(100% - 32px);
  // box-shadow: 0 33px 39px 0 rgba(21, 36, 99, 0.66);
  border-radius: 30px;

  & canvas {
    border-radius: 30px;
  }
`

const StyledButtonGroup = styled(ButtonGroup, {
  shouldForwardProp: (prop) => prop !== 'showbuttongroup',
})`
  position: static;
  transform: translateY(-240%);
  transition: all 0.3s ease-in-out;
  ${(props) => (!props.showbuttongroup ? 'opacity: 0%; visibility: collapse;' : '')}
`
const Resume = forwardRef(({ resumeLoad }, ref) => {
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
    setShowButtonGroup(true)
  }
  const onMouseLeave = () => {
    setShowButtonGroup(false)
  }
  const onClick = () => {
    setShowButtonGroup(!showButtonGroup)
  }

  return (
    <Container
      sx={{
        padding: '150px 15px 150px 15px',
        // backgroundColor: '#0072ff',
        // boxShadow: '0 33px 39px 0',
      }}
      id="resume"
      ref={ref}
    >
      <Typography variant="h1" sx={{ padding: '0px 0px 150px 0px' }}>
        Resume
      </Typography>
      <StyledDocument
        file={file}
        loading={<CircularProgress variant="determinate" value={progress} />}
        onLoadProgress={({ loaded, total }) => setProgress((loaded / total) * 100)}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        <Paper elevation={21} sx={{ borderRadius: '30px' }}>
          <StyledPage
            width={ref.current?.getBoundingClientRect().width * 0.9 || undefined}
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
            onLoadSuccess={() => resumeLoad(true)}
            pageNumber={pageNumber}
            renderAnnotationLayer={true}
            renderTextLayer={true}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
          />
        </Paper>
        <StyledButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          showbuttongroup={showButtonGroup}
          onMouseEnter={onMouseEnter}
        >
          <Button
            disabled={pageNumber <= 1}
            onClick={previousPage}
            sx={{ borderRight: 'none !important' }}
          >
            <ArrowCircleLeftRoundedIcon />
          </Button>
          <Button
            disableRipple={true}
            fullWidth={true}
            variant="string"
            sx={{
              borderRight: 'none !important',
              color: 'rgba(0, 0, 0, 1) !important',
            }}
          >
            {pageNumber}/{numPages}
          </Button>
          <Button
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            sx={{ borderRight: 'none !important' }}
          >
            <ArrowCircleRightRoundedIcon />
          </Button>
        </StyledButtonGroup>
      </StyledDocument>
      <Button
        size="large"
        variant="contained"
        endIcon={<DownloadForOfflineRoundedIcon />}
        target="_blank"
        rel="noopener noreferrer"
        href={file}
        sx={{ '&:hover': { color: 'inherit' } }}
      >
        Download
      </Button>
    </Container>
  )
})

export default Resume
