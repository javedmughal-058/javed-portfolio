# Muhammad Javed Portfolio – Updated Content Guide

This version expands the portfolio around your strongest differentiators:

- Offline-first Flutter architecture
- ObjectBox-backed warehouse workflows
- Flutter Method Channels and native Kotlin integration
- DJI native SDK integration
- Google Maps, Mapbox, offline maps, and GeoJSON
- Honeywell and in-app barcode / QR scanning
- GetX, Provider, BLoC, MVC, MVP, MVVM, and Clean Architecture
- Firebase Auth, Firestore, Messaging, Crashlytics, Remote Config, and Analytics
- PayFast, PayStack, and Stripe integrations
- Flutter flavors, Bluetooth/device integrations, and production release workflows
- Freelance mobile/web delivery through Julmon Empire
- Independent product development for Umrahforu

## Files changed

- `src/data/portfolio.ts`
- `src/types/index.ts`
- `src/components/Portfolio.tsx`
- `src/app/globals.css`

## New portfolio entries

- CoreWMS
- Agrilift Field & Drone Mobile Platform
- Umrahforu
- MySapphire
- Square15
- AlBaraka Holidays
- Kaisi WiFi
- EasiRide
- Blood Donation
- Online Vehicle Maintenance

Existing public projects are retained.

## Images for private projects

The `Project.image` field is now optional. If a project does not have a public screenshot, the UI automatically shows a polished dark/green generated-by-CSS portfolio cover.

When you later add a real screenshot, place it in:

`public/images/projects/`

and add, for example:

```ts
image: '/images/projects/corewms.png',
```

No additional component changes are required.
