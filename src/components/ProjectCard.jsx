import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  subtitle,
  description,
  meta = [],
  href,
  hrefLabel,
  delay = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-white/8 bg-ink-card/80 p-6 md:p-8 overflow-hidden"
    >
      <div className="card-shine absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative space-y-4">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 text-sm text-mist font-serif italic">{subtitle}</p>
          )}
        </div>
        <p className="text-mist leading-relaxed text-sm md:text-base">{description}</p>
        {meta.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {meta.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-mist/90"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-glow link-glow pt-2"
          >
            {hrefLabel} →
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function NavCard({ to, label, desc, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        to={to}
        className="group block rounded-xl border border-white/8 bg-ink-soft/60 px-5 py-4 hover:border-glow/30 transition-colors"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="font-medium text-white group-hover:text-glow transition-colors">
              {label}
            </div>
            <div className="text-sm text-mist mt-0.5">{desc}</div>
          </div>
          <span className="text-glow opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
