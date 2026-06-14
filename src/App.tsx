import { useState } from 'react';
import { ProgressBar, SideNav, SiteFooter, VorticeLogo } from './components/Chrome';
import { EcosystemDiagram } from './components/EcosystemDiagram';
import { PresentationBackground } from './components/PresentationBackground';
import { Reveal, Section } from './components/Section';
import {
  BENEFITS,
  COMPARE_ROWS,
  CIERRE,
  DOC,
  ECO_DIAGRAM,
  EFICIENCIA,
  FLUJO,
  GEMELO,
  HERO,
  IDEA_CENTRAL,
  LIRA,
  MODULOS,
  PROBLEMA,
  QUE_ES,
  SUITE_MODULES,
} from './content/propuesta';
import { useReveal, useScrollProgress } from './hooks/usePresentation';
import './styles/presentation.css';
import './styles/vite-presentation-extensions.css';

export function App() {
  const [progress, setProgress] = useState(0);
  useReveal();
  useScrollProgress(setProgress);

  return (
    <>
      <PresentationBackground />
      <ProgressBar progress={progress} />
      <SideNav />

      <Section id="intro" className="hero">
        <Reveal>
          <VorticeLogo />
          <div className="eyebrow">{HERO.eyebrow}</div>
          <h1>{HERO.title}</h1>
          <p className="subtitle">{HERO.subtitle}</p>
          <p>
            <span className="gradientText">{HERO.tagline}</span>
          </p>
        </Reveal>
      </Section>

      <Section id="concepto-clave">
        <Reveal>
          <p className="conceptStatement gradientText">{DOC.conceptKey}</p>
        </Reveal>
      </Section>

      <Section id="que-es">
        <Reveal>
          <div className="eyebrow">{QUE_ES.eyebrow}</div>
          {QUE_ES.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <div className="grid two" style={{ marginTop: 28 }}>
            <div className="card">
              <h3>Propósito</h3>
              <p>{QUE_ES.proposito}</p>
            </div>
            <div className="card">
              <h3>Para quién</h3>
              <p>{QUE_ES.paraQuien}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="problema">
        <Reveal>
          <div className="eyebrow">{PROBLEMA.eyebrow}</div>
          <p>{PROBLEMA.intro}</p>
          <div className="card" style={{ marginTop: 28 }}>
            <h3>Consecuencias habituales</h3>
            <ul className="bulletList">
              {PROBLEMA.consequences.map((item) => (
                <li key={item.slice(0, 40)}>{item}</li>
              ))}
            </ul>
          </div>
          <p style={{ marginTop: 28 }}>
            <span className="gradientText">{PROBLEMA.closing}</span>
          </p>
        </Reveal>
      </Section>

      <Section id="idea-central">
        <Reveal>
          <div className="eyebrow">3. Cómo funciona</div>
          <div className="eyebrow">{IDEA_CENTRAL.eyebrow}</div>
          {IDEA_CENTRAL.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </Reveal>
      </Section>

      <Section id="flujo">
        <Reveal>
          <div className="eyebrow">{FLUJO.eyebrow}</div>
          <h2>{ECO_DIAGRAM.title}</h2>
          <p>{ECO_DIAGRAM.intro}</p>
          <EcosystemDiagram />
          <p style={{ marginTop: 28 }}>{FLUJO.closing}</p>
        </Reveal>
      </Section>

      <Section id="modulos">
        <Reveal>
          <div className="eyebrow">{MODULOS.eyebrow}</div>
          <div className="modules">
            {SUITE_MODULES.map((mod) => (
              <div key={mod.name} className="module">
                <b>{mod.name.toUpperCase()}</b>
                <span>{mod.role}</span>
                <small>{mod.users}</small>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>{MODULOS.coreNote}</p>
        </Reveal>
      </Section>

      <Section id="gemelo">
        <div className="grid two">
          <Reveal>
            <div className="eyebrow">{GEMELO.eyebrow}</div>
            {GEMELO.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal>
            <div className="map" aria-hidden="true">
              <span className="orbit" />
              <span className="orbit two" />
              <span className="pin" style={{ left: '23%', top: '34%' }} />
              <span className="pin red" style={{ left: '58%', top: '47%' }} />
              <span className="pin violet" style={{ left: '76%', top: '28%' }} />
              <span className="pin" style={{ left: '42%', top: '70%' }} />
              <span className="pin red" style={{ left: '68%', top: '76%' }} />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="lira">
        <Reveal>
          <div className="eyebrow">{LIRA.eyebrow}</div>
          <div className="grid two">
            <div className="card lira">
              <h3>LIRA</h3>
              <p>{LIRA.lira}</p>
            </div>
            <div className="card">
              <h3>Inteligencia operativa</h3>
              <p>{LIRA.inteligencia}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="eficiencia">
        <Reveal>
          <div className="eyebrow">{EFICIENCIA.eyebrow}</div>
          <p>{EFICIENCIA.intro}</p>
          <div className="card" style={{ marginTop: 28 }}>
            <ol className="numberedList">
              {EFICIENCIA.steps.map((step) => (
                <li key={step.slice(0, 40)}>{step}</li>
              ))}
            </ol>
          </div>
          <p style={{ marginTop: 28 }}>{EFICIENCIA.closing}</p>
        </Reveal>
      </Section>

      <Section id="ventajas">
        <Reveal>
          <div className="eyebrow">4. Ventajas para la municipalidad</div>
          <div className="grid two" style={{ marginTop: 28 }}>
            {BENEFITS.map((benefit, index) => (
              <div key={benefit.title} className="card">
                <span className="benefitNum">4.{index + 1}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section id="comparar">
        <Reveal>
          <div className="eyebrow">5. Qué cambia en la práctica</div>
          <div className="card" style={{ marginTop: 28 }}>
            <div className="listItem listItemHeader">
              <span>Antes</span>
              <b>Con Vórtice</b>
            </div>
            {COMPARE_ROWS.map((row) => (
              <div key={row.before} className="listItem">
                <span>{row.before}</span>
                <b>{row.after}</b>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section id="cierre" className="hero">
        <Reveal style={{ textAlign: 'center' }}>
          <h2>{CIERRE.headline}</h2>
          <p style={{ maxWidth: 900, margin: '26px auto' }}>{CIERRE.body}</p>
        </Reveal>
      </Section>

      <SiteFooter />
    </>
  );
}
