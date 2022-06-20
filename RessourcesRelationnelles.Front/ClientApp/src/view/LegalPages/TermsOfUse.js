import React, {Component} from 'react';
import {Layout} from "../Layout";
import {Row, Card, Col, Button} from 'react-bootstrap';


class TermsOfUse extends Component {
    render() {
        return (
            <div>
                <Layout title={"Ressource"} subtitle={" "} goBack={() => this.props.history.goBack()}>

                    <Row className={"justify-content-center mt-5"}>


                        <Col style={{maxWidth: "1200px"}} className={"mentions"}>
                            <Card style={{borderRadius: "20px"}} className={"shadow-lg p-3 mb-5 bg-white px-4"}>
                                <Card.Body>
                                    <h1>CONDITION D’UTILISATION</h1>

                                    <h2 style={{fontSize: "42px"}}>
                                        Vos droits et Concession de droits sur le Contenu</h2>

                                    <p>Vous conservez vos droits sur tout Contenu que vous soumettez, publiez ou
                                        affichez sur ou via les Services du
                                        site <strong>ressources-relationnelles.fr</strong>. <br/> Ce qui est à vous vous
                                        appartient. <br/>Vous êtes le propriétaire de votre Contenu (ce qui inclut vos
                                        sons, photos et vidéos intégrés).<br/>
                                        L’utilisateur est seul responsable du contenu utilisateur (textes, images,
                                        opinions, fichiers etc.) qu’il met en ligne sur les pages du
                                        site <strong>ressources-relationnelles.fr</strong>. Il s’engage à ce que les
                                        contenus qu’il publie ne soient pas de nature à porter atteinte aux intérêts
                                        légitimes de tiers quels qu’ils soient. Il garantit le <strong>Ministère des
                                            Solidarités et de la Santé</strong> contre tous recours fondés directement
                                        ou indirectement sur ces propos et son contenu utilisateur, susceptibles d’être
                                        intentés par quiconque à l’encontre du <strong>Ministère des Solidarités et de
                                            la Santé</strong>. Il s’engage en particulier à prendre en charge le
                                        paiement des sommes, quelles qu’elles soient, résultant du recours d'un tiers à
                                        l'encontre du <strong>Ministère des Solidarités et de la Santé</strong>, y
                                        compris le paiement des frais, accessoires et honoraires d’avocat. <br/>
                                        <br/>Le <strong>Ministère des Solidarités et de la Santé</strong> ne peut
                                        garantir l'exactitude ou la pertinence des informations publiées sur le
                                        site <strong>ressources-relationnelles.fr</strong>. Ces informations mises à
                                        disposition sur le site <strong>ressources-relationnelles.fr</strong>, le sont
                                        uniquement à titre purement informatif et ne sauraient constituer en aucun cas
                                        un conseil ou une recommandation du <strong>Ministère des Solidarités et de la
                                            Santé</strong> de quelque nature que ce soit. L’utilisateur est pleinement
                                        responsable de la vérification des informations qu’il recueille sur les pages du
                                        site <strong>ressources-relationnelles.fr</strong>. <br/>En conséquence,
                                        l'utilisation des informations et des contenus disponibles sur les pages du
                                        site <strong>ressources-relationnelles.fr</strong> ne sauraient en aucun cas
                                        engager la responsabilité du <strong>Ministère des Solidarités et de la
                                            Santé</strong>. Les utilisateurs s'expriment à titre personnel et leurs
                                        propos ne sauraient engager la responsabilité de la du <strong>Ministère des
                                            Solidarités et de la Santé</strong>.</p>

                                    <p>En publiant sur le site <strong>ressources-relationnelles.fr</strong>, vous
                                        déclarez et garantissez que vous avez, ou avez obtenu, tous les droits,
                                        licences, consentements, autorisations, le pouvoir et/ou l’autorité nécessaires
                                        pour accorder les droits concédés aux termes des présentes pour tout Contenu que
                                        vous soumettez, postez ou affichez sur ou par le biais des Services du
                                        site <strong>ressources-relationnelles.fr</strong>. </p>

                                    <p>En application de la <a
                                        href={"https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000801164/"}>loi n°
                                        2004-575 du 21 juin 2004</a> pour la confiance dans l’économie numérique (« LCEN
                                        »), la responsabilité de la du <strong>Ministère des Solidarités et de la
                                            Santé</strong> ne saurait être engagée du fait d’un contenu illicite dont
                                        elle n’avait pas effectivement connaissance ou lorsque le caractère illicite de
                                        ce contenu lui a été signalé, si elle a procédé à sa suppression.</p>

                                    <h2>Règles de publication</h2>

                                    <p>Le savoir vivre, le respect des autres et la politesse sont des valeurs
                                        fondamentales. Vous êtes libre d’exprimer votre point de vue mais vous devez
                                        respecter celui des autres, afin de préserver le caractère courtois des
                                        échanges.</p>

                                    <p>Vous devez éviter d’engager des débats avec des personnes qui créent une
                                        polémique ou qui tiennent des propos provocants générant une ambiance
                                        conflictuelle entre les utilisateurs. </p>

                                    <p>Nous attirons votre attention sur le fait que toute information, possèdent la
                                        visibilité publique que vous divulguez sur les pages du
                                        site <strong>ressources-relationnelles.fr</strong> est accessible à l’ensemble
                                        des internautes et doit donc être considérée comme une information publique.</p>

                                    <p>De même, vous êtes informé que les contributions publiées sur les pages du
                                        site <strong>ressources-relationnelles.fr</strong> peuvent être référencées par
                                        les moteurs de recherche, et sont donc susceptibles d’être consultées par un
                                        public extérieur au site <strong>ressources-relationnelles.fr</strong>.<br/>
                                        <br/>
                                        Nous vous recommandons dès lors d’éviter la publication d’informations liées à
                                        votre situation personnelle ou révélant vos données à caractère
                                        personnel.<br/><br/>
                                        Vous vous engagez à ne pas écrire, communiquer, exprimer, diffuser, indiquer ou
                                        faire circuler les contenus illicites ou non souhaités, listés ci-dessous
                                        : <br/>

                                        <ul>
                                            <li>Les informations personnelles de tiers sans leur accord (tels que nom,
                                                prénom, adresse, numéro de téléphone, adresse électronique) ou toute
                                                information permettant d’identifier un individu
                                            </li>
                                            <li>Des textes, images, vidéos, photos, dessins - liens hypertextes -
                                                méconnaissant le droit à l’image ou un droit de propriété intellectuelle
                                                de
                                                tiers tel qu’un droit d’auteur, droit voisin, droit de marque ou de nom
                                                de
                                                domaine ou des liens contenants des contenus illicites ou non souhaités
                                                par
                                                le <strong>Ministère des Solidarités et de la Santé</strong>. A titre
                                                d’exemple, un lien hypertexte amenant vers un site internet raciste ne
                                                sera
                                                pas autorisé en raison du contenu raciste et donc illicite de ce site
                                                internet
                                            </li>
                                            <li>Des informations à caractère mensonger</li>
                                            <li>Des propos agressifs, grossiers, provocateurs, des attaques directes
                                                et
                                                des injures envers les autres utilisateurs du
                                                site <strong>ressources-relationnelles.fr</strong> ou envers des
                                                personnes
                                                physiques ou morales ou le personnel du <strong>Ministère des
                                                    Solidarités et
                                                    de la Santé</strong></li>
                                            <li>Des messages ou propos à caractère politique, militant ayant un esprit
                                                contestataire avec une vocation à créer une discorde au sein du
                                                site <strong>ressources-relationnelles.fr</strong></li>
                                            <li>Des publicités, des messages à vocation commerciale ou promotionnelle
                                                ou
                                                des petites annonces
                                            </li>
                                            <li>Des messages ou contenus manifestement illicites tels que :
                                                <ul>
                                                    <li>Les propos incitant à la haine raciale et les propos racistes,
                                                        antisémites
                                                        et xénophobes ou incitant à la haine de minorités
                                                    </li>
                                                    <li>La négation de crimes contre l’Humanité et des génocides, et
                                                        l’apologie
                                                        des crimes de guerre et/ou du terrorisme
                                                    </li>
                                                    <li>Les propos à caractère homophobe ou les propos sexistes</li>
                                                    <li>Les propos d’une nature violente, pornographique ou
                                                        pédopornographique
                                                    </li>
                                                    <li>Des propos ou images diffamatoires et les injures entre
                                                        internautes ou
                                                        à
                                                        l’égard d’une tierce personne
                                                    </li>
                                                    <li>Des propos ou images portant atteinte à la vie privée ou à la
                                                        présomption
                                                        d’innocence
                                                    </li>
                                                    <li>L’incitation à la commission de crimes ou de délits, l’apologie
                                                        des
                                                        stupéfiants
                                                    </li>
                                                    <li>L’appel au meurtre et l’incitation au suicide</li>
                                                    <li>La promotion d’une organisation reconnue comme une secte.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <br/>
                                        Il s’agit d’une liste non-exhaustive, le <strong>Ministère des Solidarités et de
                                            la Santé</strong> se réserve le droit de modérer tout contenu qui n’a pas de
                                        rapport avec son activité.
                                    </p>

                                    <p>Vous ne devez pas usurper l’identité d’une tierce personne.</p>

                                    <p>Vous êtes invité à écrire dans un français correct, en minuscules, sans abuser de
                                        la ponctuation et sans utiliser un langage de type « SMS ».</p>

                                    <p>Enfin, vous devez faire attention à ce que la sécurité du
                                        site <strong>ressources-relationnelles.fr</strong> ne soit pas compromise à
                                        l’occasion de vos publications ou des échanges de messages. <br/>Par exemple,
                                        vous
                                        devez éviter des liens pouvant compromettre la sécurité des systèmes
                                        informatiques d’autres utilisateurs ou tout autre programme informatique
                                        malveillant visant à endommager ou à intercepter clandestinement tout système
                                        informatique, données ou informations nominatives.</p>

                                    <h2>Modération et signalement</h2>

                                    <p>La modération de la publication des ressources sur le
                                        site <strong>ressources-relationnelles.fr</strong> se fait avant toute parutions
                                        (dans le cas d’un compte non certifié) par les administrateurs du
                                        site <strong>ressources-relationnelles.fr</strong> ou une entreprise tierce
                                        mandatée par Le <strong>Ministère des Solidarités et de la Santé</strong>. Dans
                                        le cadre d’un compte certifié, cette modération intervient à postériori, ou dans
                                        le cadre d’un signalement de ressource.</p>

                                    <p>Vous pouvez signaler à l’administrateur de la page à tout moment une ressource ou
                                        un commentaire qui ne serait pas conforme à la présente charte grâce à la
                                        fonction de signalement. <br/>
                                        Nous nous réservons le droit de masquer, de supprimer et signaler à <strong>Microsoft
                                            Azure</strong> tout contenu ne respectant pas les règles de la présente
                                        charte de modération.<br/>
                                        Si à la suite d’avertissements et signalements répétés, vous persistez à
                                        méconnaître les règles de la présente charte, le <strong>Ministère des
                                            Solidarités et de la Santé</strong> se réserve tout droit de limitation et
                                        de restriction (permanent ou temporaire) d’accès au
                                        site <strong>ressources-relationnelles.fr</strong></p>

                                    <p>Suppression des contributions et désinscription par l'utilisateur<br/>
                                        Vous pouvez à tout moment supprimer vos propres contributions ou vous
                                        désinscrire du site <strong>ressources-relationnelles.fr</strong></p>

                                    <h2>Données personnelles</h2>

                                    <p>Vos données personnelles renseignées sur le
                                        site <strong>ressources-relationnelles.fr</strong> feront l’objet de traitements
                                        par le <strong>Ministère des Solidarités et de la Santé</strong>, responsable de
                                        traitements pour les finalités suivantes : <br/>
                                        - Animation du site <strong>ressources-relationnelles.fr</strong><br/>
                                        - Organisation et suivi de la participation à des activité, jeux et
                                        concours<br/>
                                        - Analyses et statistiques sur la base de son intérêt légitime à réaliser des
                                        opérations de communication.</p>

                                    <p>Vous disposez de droits d’accès, de rectification, d'effacement, de limitation,
                                        d’opposition, le cas échéant de portabilité et de définir des directives
                                        relatives à la conservation, à l’effacement et à la communication de vos données
                                        à caractère personnel après votre décès.</p>

                                    <p>Le cas échéant, vous pouvez retirer votre consentement aux traitements des
                                        données ce qui aura pour effet de les faire cesser.</p>

                                    <p>Vous pouvez exercer vos droits et adresser toute demande d’information concernant
                                        le traitement de vos données personnelles par le <strong>Ministère des
                                            Solidarités et de la Santé</strong> par voie postale à :<br/>
                                        <br/>
                                        <p style={{textAlign: "center", width: "100%"}}><strong>Ministère des
                                            Solidarités et de la Santé</strong><br/>
                                            Direction Générale – Protection des Données Personnelles<br/>
                                            14 Av. Duquesne,<br/>
                                            75350 Paris</p></p>

                                    <br/>
                                    <p>Vous avez également le droit d'introduire une réclamation auprès de la CNIL
                                        (cnil.fr).<br/>
                                        Les données que vous communiquez sur le
                                        site <strong>ressources-relationnelles.fr</strong> font également l’objet de
                                        traitement pour leurs propres finalités et sous leur responsabilité. </p>

                                    <h2>Propriété intellectuelle</h2>

                                    <p>Tous les droits de reproduction sont réservés, pour tous les éléments intégrés
                                        par le <strong>Ministère des Solidarités et de la Santé</strong> ou ses
                                        modérateurs sur le site <strong>ressources-relationnelles.fr</strong>, qu’ils
                                        soient textes, images ou sons, y compris pour les documents téléchargeables.
                                    </p>

                                    <p>La reproduction de tout ou partie de ces éléments sur un support quel qu’il soit
                                        est formellement interdite sauf autorisation expresse du <strong>Ministère des
                                            Solidarités et de la Santé</strong>.</p>

                                    <p>L’utilisateur s’engage à ce que les contenus qu’il publie ne soient pas de nature
                                        à porter atteinte aux intérêts légitimes et droits de propriété intellectuelle
                                        de tiers quels qu’ils soient. Il garantit le <strong>Ministère des Solidarités
                                            et de la Santé</strong> contre tous recours fondés directement ou
                                        indirectement sur ses contributions, susceptibles d’être intentés par quiconque
                                        à l’encontre du <strong>Ministère des Solidarités et de la Santé</strong>. Il
                                        s’engage en particulier à prendre en charge le paiement des sommes, quelles
                                        qu’elles soient, résultant du recours d’un tiers à l’encontre du <strong>Ministère
                                            des Solidarités et de la Santé</strong>, y compris le paiement des frais,
                                        accessoires et honoraires.</p>

                                    <p>En publiant un commentaire sur le
                                        site <strong>ressources-relationnelles.fr</strong>, vous autorisez le <strong>Ministère
                                            des Solidarités et de la Santé</strong> à reproduire, publier et diffuser,
                                        en tout ou partie, sur tout support et pour toute utilisation, les contributions
                                        que vous aurez publiées sur le
                                        site <strong>ressources-relationnelles.fr</strong>. Cette autorisation est
                                        valable pour le monde entier et pour la durée de protection des droits d’auteur.
                                    </p>

                                    <h2>Modification de la charte</h2>

                                    <p>Le <strong>Ministère des Solidarités et de la Santé</strong> se réserve le droit
                                        de modifier les termes, conditions et mentions de la présente charte à tout
                                        moment sans avis préalable. Il est donc conseillé aux utilisateurs de consulter
                                        régulièrement la dernière version de cette charte.</p>

                                    <p>Merci pour votre compréhension. <br/>
                                        <br/>Le respect de ces règles devrait permettre que le
                                        site <strong>ressources-relationnelles.fr</strong> soit un espace agréable
                                        d’expression et d’échange pour tous.</p>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                    <Row>
                                <span style={{textAlign: "center"}}>
                                    <strong className="bold-text">Made with ❤️ &nbsp; and ☕ &nbsp; by The Besoin Lab in Orléans, France.</strong>
                                    </span>
                    </Row>
                </Layout>
            </div>

        )
            ;
    }
}

export default TermsOfUse;