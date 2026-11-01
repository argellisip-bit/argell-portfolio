import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { createPortal } from 'react-dom'
import { systemsWorkflowSamples as photos } from '@/data/systems-workflows'
import '../styles/workflow-carousel.css'

export default function WorkflowCarousel() {
  const [active, setActive] = useState<(typeof photos)[number] | null>(null)
  const [paused, setPaused] = useState(false)
  const trigger = useRef<HTMLButtonElement | null>(null)
  const closeButton = useRef<HTMLButtonElement | null>(null)
  const close = () => { setActive(null); requestAnimationFrame(() => trigger.current?.focus()) }
  useEffect(() => {
    if (!active) return
    closeButton.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.stopImmediatePropagation(); setActive(null); requestAnimationFrame(() => trigger.current?.focus()) }
      if (event.key === 'Tab') { event.preventDefault(); closeButton.current?.focus() }
    }
    document.addEventListener('keydown', onKey, true)
    return () => document.removeEventListener('keydown', onKey, true)
  }, [active])
  return (
    <div className="workflow-carousel">
      <div className="workflow-carousel__scene">
        <div className="workflow-carousel__ring" style={{ animationPlayState: paused || active ? 'paused' : 'running' }}>
          {photos.map((photo, index) => (
            <button key={photo.file} className="workflow-carousel__photo" style={{ '--angle': `${index * 360 / photos.length}deg` } as CSSProperties} onClick={(event) => { trigger.current = event.currentTarget; setActive(photo) }} aria-label={`View ${photo.label}`}>
              <img src={photo.src} alt={photo.label} />
              <span>{photo.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="workflow-carousel__controls"><span>Select a photo to view it full size</span><button onClick={() => setPaused(!paused)}>{paused ? 'Resume rotation' : 'Pause rotation'}</button></div>
      {active && createPortal(
        <div className="workflow-carousel__viewer" role="dialog" aria-modal="true" aria-label={active.label} onClick={(event) => { if (event.target === event.currentTarget) close() }}>
          <button ref={closeButton} onClick={close} className="workflow-carousel__close">✕ Back to carousel</button>
          <img src={active.src} alt={active.label} />
          <span>{active.label}</span>
        </div>, document.body,
      )}
    </div>
  )
}
