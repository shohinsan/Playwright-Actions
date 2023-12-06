# ----------------- Microsoft Playwright - Browser Testing -----------------

pw-run:
	playwright test src/

pw-html:
	lsof -i :9323 | awk 'NR!=1 {print $$2}' | xargs -r kill -9
	npx playwright show-report

pw-trace:
	$(eval files := $(wildcard test-results/*/*.zip))
	@$(foreach file,$(files), \
		(npx playwright show-trace $(file) &) ;)

# ----------------- Vitest -----------------
v-run:
	vitest src/vitest

v-html:
	lsof -i :4173 | awk 'NR!=1 {print $$2}' | xargs -r kill -9
	npx vite preview --outDir vitest-report


# ----------------- Web Vitals - Performance Measures -----------------

lcp:
	@echo "Largest Contentful Paint API"
	node src/browser/web-vitals/lcp.mjs

nt:
	@echo "Navigation Timing API"
	node src/browser/web-vitals/nt.mjs

srt:
	@echo "Single Resource Timing API "
	node src/browser/web-vitals/srt.mjs

fcp:
	@echo "Paint Timing API"
	node src/browser/web-vitals/fcp.mjs

fcps:
	@echo "Paint Timing API"
	node src/browser/web-vitals/fcps.ts

cls:
	@echo "Layout Instability API"
	node src/browser/web-vitals/cls.mjs

lt:
	@echo "Long Task API "
	node src/browser/web-vitals/lt.mjs

dt:
	@echo "Chrome DevTools"
	node src/browser/web-vitals/dt.mjs