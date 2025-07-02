import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import type {Props} from '@theme/Footer/Layout';

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): ReactNode {
  return (
    <footer
      className={clsx(ThemeClassNames.layout.footer.container, 'footer', {
        // 'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        <div className="container padding-vert--lg padding-vert--md">
            <div className="row margin-bottom--md">
                <div className="col col--6">
                    <div className="footer__title">🌍 Conception responsable</div>
                    <p className="text-on-primary">Ce site ne collecte aucune donnée, je suis à l'aise avec le fait de ne pas savoir combien de visites ce site génère</p>
                    {/* Ecoindex */}
                    <div>
                        <img src="https://bff.ecoindex.fr/badge/?theme=light&url=https://www.guillaumecasbas.fr" alt="Ecoindex Badge"/>
                    </div>
                    {/* kastor */}
                     <a href="https://kastor.green/audit-result/9e082f78-c2d0-47e9-62de-08ddb93f0b26/ecodesign">
                        <img src="https://kastor.green/api/badges/639595fa-eef2-44dd-fd0b-08ddb9390ce8/language/fr" alt="This website obtain a score of 88 - checked by kastor.green" width={400} height={118}/>
                    </a> 
                </div>
                <div className="col col--6">
                    {links}
                </div>
            </div>
            {(logo || copyright) && (
            <div className="footer__bottom text--center text-on-primary">
                {logo && <div className="margin-bottom--sm">{logo}</div>}
                {copyright}
            </div>
            )}
        </div>
      </div>
    </footer>
  );
}
