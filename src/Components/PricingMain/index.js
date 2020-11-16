import React from "react";
import { Container } from "../Container";
import {
  PricingWrapper,
  PricingCols,
  PricingCol,
  PricingColTitle,
  PricingColDescription,
  PricingColPrice,
  PricingColFeatures,
  PricingColFeature,
  PricingColIcon,
  PricingColFeatureName,
  PricingColLink,
} from "./PricingMainElements";
import checkIcon from "../../images/pricing/check.svg";
import { data } from "./PricingData";

const PricingMain = () => {
  return (
    <PricingWrapper>
      <Container>
        <PricingCols>
          {data.map((colData, i) => {
            return (
              <PricingCol key={i}>
                <PricingColTitle>{colData.title}</PricingColTitle>
                <PricingColDescription>
                  {colData.description}
                </PricingColDescription>
                <PricingColPrice>${colData.price}</PricingColPrice>
                <PricingColFeatures>
                  {colData.features.map((feature, i) => {
                    return (
                      <PricingColFeature key={i}>
                        {feature.icon ? (
                          <>
                            <PricingColIcon src={checkIcon} />
                            <PricingColFeatureName>
                              {feature.featureName}
                            </PricingColFeatureName>
                          </>
                        ) : (
                          <>
                            <PricingColIcon
                              className="invisible"
                              src={checkIcon}
                            />
                            <PricingColFeatureName className="disabled">
                              {feature.featureName}
                            </PricingColFeatureName>
                          </>
                        )}
                      </PricingColFeature>
                    );
                  })}
                </PricingColFeatures>
                <PricingColLink>Request Access</PricingColLink>
              </PricingCol>
            );
          })}
        </PricingCols>
      </Container>
    </PricingWrapper>
  );
};

export default PricingMain;
