<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema">

  <xsl:output method="xml" indent="yes" />

  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()" />
    </xsl:copy>
  </xsl:template>

  <xsl:template match="userdata">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()" />

      <score>
        <xsl:value-of select="sum(evaluation/xs:integer(.))" />
      </score>

      <focus>
        <xsl:variable name="min-score"
          select="min(evaluation/xs:integer(.))" />
        <xsl:value-of
          select="evaluation[xs:integer(.) = $min-score][1]/@skill" />
      </focus>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>