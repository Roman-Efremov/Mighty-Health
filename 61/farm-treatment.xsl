<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Post heart attack treatment</h2>
                <table>
                    <tr>
                        <td>Medicament</td>
                        <td>Time</td>
                        <td>Amount</td>
                        <td>Status</td>
                    </tr>
                    <xsl:apply-templates select="//farm-treatment"/>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="farm-treatment">
    <xsl:for-each select="medicament">
        <tr>
            <td><xsl:value-of select="@med_name"/></td>
            <td><xsl:value-of select="@hour"/></td>
            <td><xsl:value-of select="@amount"/></td>
            <td><xsl:value-of select="@status"/></td>
        </tr>
    </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>