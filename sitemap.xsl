<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>XML Sitemap - LegisPro</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <style type="text/css">
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                        font-size: 14px;
                        color: #333;
                        background: #f5f5f5;
                        padding: 40px 20px;
                        line-height: 1.6;
                    }
                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                        background: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        overflow: hidden;
                    }
                    header {
                        background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
                        color: white;
                        padding: 30px 40px;
                    }
                    h1 {
                        font-size: 28px;
                        font-weight: 600;
                        margin-bottom: 8px;
                    }
                    .subtitle {
                        font-size: 14px;
                        opacity: 0.9;
                    }
                    .info {
                        background: #f8f9fa;
                        padding: 20px 40px;
                        border-bottom: 1px solid #e0e0e0;
                    }
                    .info p {
                        margin: 8px 0;
                        font-size: 14px;
                        color: #666;
                    }
                    .info strong {
                        color: #333;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    thead {
                        background: #fafafa;
                        border-bottom: 2px solid #e0e0e0;
                    }
                    th {
                        padding: 16px 20px;
                        text-align: left;
                        font-weight: 600;
                        font-size: 12px;
                        text-transform: uppercase;
                        color: #666;
                        letter-spacing: 0.5px;
                    }
                    td {
                        padding: 16px 20px;
                        border-bottom: 1px solid #f0f0f0;
                    }
                    tbody tr {
                        transition: background-color 0.2s;
                    }
                    tbody tr:hover {
                        background-color: #f8f9fa;
                    }
                    .url-cell {
                        max-width: 500px;
                    }
                    .url-cell a {
                        color: #1a73e8;
                        text-decoration: none;
                        word-break: break-all;
                    }
                    .url-cell a:hover {
                        text-decoration: underline;
                    }
                    .priority-cell,
                    .changefreq-cell {
                        font-size: 13px;
                        color: #666;
                    }
                    .priority-high {
                        color: #0f9d58;
                        font-weight: 600;
                    }
                    .priority-medium {
                        color: #f9ab00;
                        font-weight: 600;
                    }
                    .priority-low {
                        color: #999;
                    }
                    footer {
                        padding: 20px 40px;
                        text-align: center;
                        color: #999;
                        font-size: 13px;
                        background: #fafafa;
                    }
                    .stats {
                        display: flex;
                        gap: 30px;
                        margin-top: 12px;
                    }
                    .stat {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }
                    .stat-value {
                        font-weight: 600;
                        color: #1a73e8;
                        font-size: 16px;
                    }
                    @media (max-width: 768px) {
                        body {
                            padding: 20px 10px;
                        }
                        header, .info, td, th {
                            padding-left: 20px;
                            padding-right: 20px;
                        }
                        h1 {
                            font-size: 22px;
                        }
                        .stats {
                            flex-direction: column;
                            gap: 12px;
                        }
                        th:nth-child(3),
                        td:nth-child(3) {
                            display: none;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <header>
                        <h1>XML Sitemap</h1>
                        <p class="subtitle">LegisPro - Legal Services</p>
                        <div class="stats">
                            <div class="stat">
                                <span>Total URLs:</span>
                                <span class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
                            </div>
                        </div>
                    </header>

                    <div class="info">
                        <p><strong>What is a sitemap?</strong></p>
                        <p>This XML Sitemap is used by search engines like Google, Bing, and Yahoo to discover and index pages on this website. Learn more about <a href="https://www.sitemaps.org/" target="_blank" style="color: #1a73e8;">XML sitemaps</a>.</p>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>URL</th>
                                <th style="width: 120px;">Priority</th>
                                <th style="width: 140px;">Change Frequency</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="sitemap:urlset/sitemap:url">
                                <tr>
                                    <td class="url-cell">
                                        <a href="{sitemap:loc}">
                                            <xsl:value-of select="sitemap:loc"/>
                                        </a>
                                    </td>
                                    <td class="priority-cell">
                                        <xsl:variable name="priority" select="sitemap:priority"/>
                                        <span>
                                            <xsl:attribute name="class">
                                                <xsl:choose>
                                                    <xsl:when test="$priority &gt;= 0.8">priority-high</xsl:when>
                                                    <xsl:when test="$priority &gt;= 0.5">priority-medium</xsl:when>
                                                    <xsl:otherwise>priority-low</xsl:otherwise>
                                                </xsl:choose>
                                            </xsl:attribute>
                                            <xsl:value-of select="$priority"/>
                                        </span>
                                    </td>
                                    <td class="changefreq-cell">
                                        <xsl:value-of select="sitemap:changefreq"/>
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>

                    <footer>
                        Generated by LegisPro XML Sitemap
                    </footer>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
