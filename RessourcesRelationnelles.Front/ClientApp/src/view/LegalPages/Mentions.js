import React, {Component} from 'react';
import {Layout} from "../Layout";
import {Row, Card, Col, Button} from 'react-bootstrap';


class Mentions extends Component {
    render() {
        return (
            <div>
                <Layout title={"Ressource"} subtitle={" "} goBack={() => this.props.history.goBack()}>

                    <Row className={"justify-content-center mt-5"}>


                        <Col style={{maxWidth: "1200px"}} className={"mentions"}>
                            <Card style={{borderRadius: "20px"}} className={"shadow-lg p-3 mb-5 bg-white px-4"}>
                                <Card.Body>
                                    <h1>MENTIONS LEGALES</h1>

                                    <h2>
                                        Identification Éditeur</h2>

                                    <p><strong>Ministère des Solidarités et de la Santé</strong><br/>
                                        14 Av. Duquesne,<br/>
                                        75350 Paris</p>

                                    <p>Administration de l'État, Ministère</p>

                                    <p>SIRET : 130 016 538 00014</p>

                                    <p>Directeur de la publication :<br/>
                                        Sandrine Fauduet, déléguée de la Délégation à l’information et à la
                                        communication
                                        (DICOM)
                                    </p>

                                    <p>Contact : dir.publication@solidarites-sante.gouv.fr</p>

                                    <h2>Identification Hébergeur</h2>

                                    <p><strong>Microsoft Azure</strong><br/>
                                        37 quai du président Roosevelt,<br/>
                                        92130 Issy les Moulineaux</p>

                                    <p>SAS (Société par actions simplifiée)</p>

                                    <p>SIRET : 327 733 184 00516</p>

                                    <p>CAPITAL : 4 240 000 €</p>

                                    <p>Contact : contact@microsoft-azure.com</p>

                                    <h2>Identification du développeur</h2>

                                    <p><strong>The Besoin Lab</strong><br/>
                                        1 All. du Titane,<br/>
                                        45100 Orléans-la-Source</p>

                                    <p>SAS (Société par actions simplifiée)</p>

                                    <p>SIRET : 123 456 789 12345</p>

                                    <p>CAPITAL : 500 000 €</p>

                                    <p>Contact : contact@thebesoinlab.com</p>

                                    <h2>Vie privée et cookies</h2>

                                    <p>1 - Lors de son inscription sur le
                                        site <strong>ressources-relationnelles.fr</strong>,
                                        l’utilisateur
                                        accepte
                                        que
                                        soient collectées et conservées les données ci-après : Nom, prénom, email, date
                                        de
                                        naissance,
                                        adresse IP.</p>

                                    <p>D’autres données facultatives telles que la ville, pays, régions peuvent
                                        également
                                        être
                                        communiquées par l’utilisateur s’il le souhaite.</p>

                                    <p>Les données d’inscription sont utilisées :</p>

                                    <ul style={{listStyle: "none"}}>
                                        <li><p>I. Pour la participation aux différents services proposés sur le site
                                            <strong> ressources-relationnelles.fr</strong> (Partage de ressources,
                                            Activités, etc.)</p>
                                        </li>
                                        <li><p>II. Pour la souscription par l’utilisateur à des services spécifiques
                                            (newsletter,
                                            concours)</p>
                                        </li>
                                        <li>
                                            <p>III. Pour le fonctionnement technique et administratif du site
                                                <strong> ressources-relationnelles.fr</strong>.</p>
                                        </li>
                                    </ul>

                                    <p>Les données fournies sont conservées par la société <strong>Microsoft
                                        Azure</strong> pour la durée
                                        d’utilisation
                                        de l’utilisateur du site et des services proposés.</p>

                                    <p>Ces données sont conservées, en France, dans un environnement technique
                                        sécurisé.</p>

                                    <p>2 - L’utilisateur peut à tout moment modifier ou supprimer les données
                                        personnelles
                                        fournies
                                        à
                                        travers son espace utilisateur (rubrique « Paramètres de profile ») et ainsi
                                        exercer
                                        son
                                        droit
                                        d’accès.</p>

                                    <p>La suppression définitive d’un compte utilisateur (matérialisé par le couple
                                        adresse
                                        email/IP
                                        uniquement) ne peut intervenir qu’après vérification de l’authenticité de la
                                        demande
                                        et
                                        épuisement des obligations relatives à la recherche d’infractions.</p>

                                    <p>3 - Le <strong> Ministère des Solidarités et de la Santé</strong> dispose d’un
                                        correspondant
                                        Informatique et
                                        Libertés (CIL). Ce dernier a procédé à l’inscription des traitements associés
                                        aux
                                        données
                                        collectées au sein d’un registre dédié.</p>

                                    <p>L’utilisateur peut également exercer son droit d’accès aux données personnelles
                                        en
                                        s’adressant au
                                        CIL à travers l’adresse privacy@ressources-relationnelles.fr et/ou en écrivant
                                        au
                                        <strong> Ministère des Solidarités et de la Santé</strong> , Service
                                        Correspondant Informatique et Libertés, 14
                                        Av.
                                        Duquesne
                                        -
                                        75350 Paris. La consultation du registre des traitements s’effectue auprès du
                                        CIL
                                        selon les
                                        mêmes modalités.</p>

                                    <p>4 - Le site <strong>ressources-relationnelles.fr</strong> utilise un système de
                                        cookies pour son
                                        fonctionnement.
                                        Ces cookies pourront contenir des données relatives à l’identification et à la
                                        navigation de
                                        l’utilisateur sur le site <strong>ressources-relationnelles.fr</strong>.</p>

                                    <p>L’utilisateur dispose de la faculté de bloquer ou supprimer les cookies par le
                                        biais
                                        des
                                        options
                                        présentées au sein de son navigateur (Pour « Google Chrome » : Ctrl + Maj +
                                        Suppr ;
                                        pour «
                                        Internet Explorer » : Alt+X puis sélectionner le menu Option Internet ; pour «
                                        Mozilla
                                        firefox »
                                        : Onglet Firefox puis sélectionner le menu Options).</p>

                                    <p>Note : Le blocage des cookies peut altérer le fonctionnement des services
                                        proposés
                                        sur
                                        Internet.</p>

                                    <p>L’utilisateur peut également paramétrer ou désactiver les cookies publicitaires
                                        en se
                                        connectant
                                        à l’adresse : http://www.youronlinechoices.com/fr/.</p>

                                    <p>5 - Il appartient à l’utilisateur de s’assurer de la confidentialité du ou des
                                        mots
                                        de passe
                                        utilisés sur le site <strong>ressources-relationnelles.fr</strong>. La société
                                        Microsoft Azure et
                                        le
                                        <strong> Ministère des Solidarités et de la Santé</strong> ne disposent d’aucun
                                        mot de passe et ne saurait être
                                        tenue pour
                                        responsable en cas de perte ou d’utilisation non conforme de cet élément.
                                        L’utilisateur est
                                        invité à signaler toute utilisation non autorisée de son espace utilisateur.</p>

                                    <p>6 - La société Microsoft Azure et le <strong>Ministère des Solidarités et de la
                                        Santé</strong> se
                                        réserve le
                                        droit
                                        de communiquer aux autorités compétentes toutes données requises pour la
                                        recherche
                                        et
                                        l’identification de l’auteur d’une infraction.</p>

                                    <h2>
                                        Propriété Intellectuelle</h2>

                                    <p>Le site <strong>ressources-relationnelles.fr</strong>, ses contenus et services,
                                        ses
                                        logiciels,
                                        dessins,
                                        modèles, bases de données, marques et logos sont soumis au droit de la Propriété
                                        intellectuelle.
                                        Ces différents éléments sont la propriété du <strong> Ministère des Solidarités
                                            et de la Santé</strong>.
                                        L’utilisateur s’engage à respecter ces droits. Le <strong> Ministère des
                                            Solidarités et de la Santé</strong> ne
                                        confère à l’utilisateur qu’un droit non exclusif et incessible d’utilisation
                                        (l’utilisation
                                        s’entend d’un usage non commercial, caractérisé par la navigation, la
                                        participation
                                        et
                                        l’échange) sur son site <strong>ressources-relationnelles.fr</strong>. A
                                        l’exception des marques
                                        et
                                        logos et
                                        des
                                        contenus grevés de droits de propriété intellectuelle de tiers ou contenant des
                                        données à
                                        caractère personnel, qui sont des informations publiques librement et
                                        gratuitement
                                        réutilisables
                                        dans les conditions fixées par la loi n°78-753 du 17 juillet 1978, formalisées
                                        dans
                                        les
                                        conditions générales de réutilisation des informations publiques ou dans le
                                        respect
                                        des
                                        conditions générales de réutilisation des informations publiques.</p>

                                    <h2>LIENS</h2>

                                    <h3>Liens sortants</h3>

                                    <p>Le propriétaire du site <strong>ressources-relationnelles.fr</strong> décline
                                        toute responsabilité
                                        et
                                        n’est
                                        pas
                                        engagé par le référencement via des liens hypertextes, de ressources tierces
                                        présentes sur
                                        le
                                        réseau Internet, tant en ce qui concerne leur contenu que leur pertinence.</p>

                                    <h3>Liens entrants</h3>

                                    <p>Le propriétaire du site <strong>ressources-relationnelles.fr</strong> autorise
                                        les liens
                                        hypertextes
                                        vers
                                        l’une
                                        des pages de ce site, à condition que ceux-ci ouvrent une nouvelle fenêtre et
                                        soient
                                        présentés
                                        de manière non équivoque afin d’éviter :</p>

                                    <p>- Tout risque de confusion entre le site citant et le propriétaire du site<br/>
                                        - Toute présentation tendancieuse, ou contraire aux lois en vigueur.<br/>
                                        - Le propriétaire du site se réserve le droit de demander la suppression d’un
                                        lien
                                        s’il
                                        estime
                                        que le site source ne respecte pas les règles ainsi définies.<br/>
                                        <br/>
                                    </p>
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

export default Mentions;