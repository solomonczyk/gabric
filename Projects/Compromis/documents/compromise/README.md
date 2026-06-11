# Compromise Documentation Index

Date: 2026-06-11

This directory contains the consolidated documentation for the Compromise project. All changes here are documentation-only and govern the legal, product and scope decisions for the platform.

---

## Legal prelaunch base (blocking)

[`legal_prelaunch_base_001/`](legal_prelaunch_base_001/) — Legal and compliance baseline.

This package is a **blocking legal extension**. It is not legal advice. Public launch, paid pilots, cross-border candidate disclosure, AI screening and recruitment/intermediation services are blocked until the lawyer-confirmed license analysis is complete.

**Key documents:**
- [ADR: MVP Verified Job Board Scope Lock](legal_prelaunch_base_001/docs/10_adr_mvp_verified_job_board_scope_lock.md) — Governing scope lock. MVP is a verified job board only. All recruitment/agency features are blocked until legal review.
- [Recruitment intermediation and licensing](legal_prelaunch_base_001/docs/04_recruitment_intermediation_and_licensing.md) — Analysis of job board vs agency licensing.
- [Questions for lawyer](legal_prelaunch_base_001/docs/08_questions_for_lawyer.md) — Unanswered legal questions.

**Current verdict:**

```json
{
  "legal_prelaunch_base": "PREPARED",
  "legal_advice": false,
  "lawyer_review_required": true,
  "launch_allowed": false,
  "paid_pilots_allowed": false,
  "production_accepted": false
}
```

---

## Proof artifacts

- [`proof_mvp_legal_scope_lock_002.json`](proof_mvp_legal_scope_lock_002.json) — Proof of MVP legal scope lock.

---

## References to other packages

- [Canon package 001](../../compromise_canon_package_001/) — Product, market, technical and governance baseline.
- [Acquisition strategy 001](../../compromise_acquisition_strategy_001/) — Candidate and employer acquisition strategy.
