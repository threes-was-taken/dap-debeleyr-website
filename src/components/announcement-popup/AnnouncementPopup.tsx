'use client';

import { Dialog } from '@radix-ui/themes';
import type { JSX } from 'react';
import { useSyncExternalStore } from 'react';
import styles from './AnnouncementPopup.module.css';

// Bump this when the message changes so visitors who dismissed an older
// announcement see the new one.
const ANNOUNCEMENT_ID = 'placeholder-announcement-1';
const STORAGE_KEY = 'dismissedAnnouncementId';
const DISMISS_EVENT = 'announcement-dismissed';

function subscribe(onStoreChange: () => void): () => void {
  window.addEventListener(DISMISS_EVENT, onStoreChange);
  return () => window.removeEventListener(DISMISS_EVENT, onStoreChange);
}

function isOpenSnapshot(): boolean {
  return window.localStorage.getItem(STORAGE_KEY) !== ANNOUNCEMENT_ID;
}

function isOpenServerSnapshot(): boolean {
  return false;
}

function dismiss(): void {
  window.localStorage.setItem(STORAGE_KEY, ANNOUNCEMENT_ID);
  window.dispatchEvent(new Event(DISMISS_EVENT));
}

export function AnnouncementPopup(): JSX.Element {
  const open = useSyncExternalStore(subscribe, isOpenSnapshot, isOpenServerSnapshot);

  function handleOpenChange(isOpen: boolean): void {
    if (!isOpen) {
      dismiss();
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Content maxWidth="450px">
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => handleOpenChange(false)}
          aria-label="Sluiten"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Dialog.Title>Belangrijke mededeling</Dialog.Title>
        <Dialog.Description size="3" className={styles.description}>
          Beste klanten,
          <br />
          <br />
          Op 23/07/2026 moet ik een operatie ondergaan aan mijn linker hand. Dit betekent dat ikzelf niets zal
          mogen/kunnen doen de volgende 3 maand.
          <br />
          <br />
          Mijn collega’s Katrijn en Kimberly vangen mijn afwezigheid op en zullen jullie huisdieren met evenveel kunde
          en liefde behandelen. Jammer genoeg zal hierdoor de wachttijd voor routinecontroles en vaccinaties langer zijn
          dan normaal.
          <br />
          <br />
          Hou hiermee zeker rekening als jullie huisdier ook mee op vakantie gaat. Zieke dieren en spoedgevallen
          proberen zij zeker de dag zelf, ten laatste de volgende dag, te helpen. In deze periode zal de praktijk open
          zijn tot 18.30.
          <br />
          <br />
          Gelieve hiermee rekening te houden voor het ophalen van voeding en/of medicatie Bedankt voor jullie begrip!
          <br />
          <br />
          Ingrid
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Root>
  );
}
